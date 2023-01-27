import { useState } from "react";

/**
 * Example usage:
 *
 * // CREATE A NEW VALUE ENTRY ON LOCAL STORAGE OR RETURN AN EXISTING ONE:
 *
 * const [value, setValue] = useLocalStorage("key", "value");
 *
 *
 * REPLACING THE OLD VALUE BY THE NEW ON LOCAL STORAGE.
 *
 * setValue("new value")
 *
 *
 * @param {string} key Key in which the value will be invoked.
 * @param {string} value Initial value to be saved on local storage.
 * @returns {[string, function(): void]}
 */
function useLocalStorage(key: string, value: string) {
  const [savedValue, setSavedValue] = useState(() => {
    if (typeof window === "undefined") {
      return value;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? item : value;
    } catch (error) {
      console.error(error);
      return value;
    }
  });

  const setValue = (newValue: string) => {
    try {
      setSavedValue(newValue);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, newValue);
      }
    } catch (error) {
      console.error(error);
      return newValue;
    }
  };

  return [savedValue, setValue];
}

export default useLocalStorage;
