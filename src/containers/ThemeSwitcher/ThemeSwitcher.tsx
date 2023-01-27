import { useCallback, useEffect } from "react";
import { useLocalStorage } from "src/helpers/hooks";
import styles from "./styles.module.scss";

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "system");

  useEffect(() => {
    document.documentElement.setAttribute("data-selected-theme", theme);
  }, []);

  const handleSwitchTheme = useCallback((event) => {
    const selectedTheme = event.currentTarget.getAttribute("data-theme");

    document.documentElement.setAttribute("data-selected-theme", selectedTheme);
    setTheme(selectedTheme);
  }, []);

  return (
    <div className={styles["theme-switcher-container"]}>
      <button
        className={theme === "light" ? styles["active-button"] : ""}
        type="button"
        data-theme="light"
        aria-pressed={theme === "light"}
        onClick={handleSwitchTheme}
      >
        <span aria-hidden="true">☀️</span>
        Light
      </button>
      <button
        className={theme === "dark" ? styles["active-button"] : ""}
        type="button"
        data-theme="dark"
        aria-pressed={theme === "dark"}
        onClick={handleSwitchTheme}
      >
        <span aria-hidden="true">🌙</span>
        Dark
      </button>
      <button
        className={theme === "system" ? styles["active-button"] : ""}
        type="button"
        data-theme="system"
        aria-pressed={theme === "system"}
        onClick={handleSwitchTheme}
      >
        <span aria-hidden="true">🖥️</span>
        System
      </button>
    </div>
  );
}

export default ThemeSwitcher;
