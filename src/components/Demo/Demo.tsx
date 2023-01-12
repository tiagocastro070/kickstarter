import { useEffect, useState } from "react";

function Demo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Sample component</h1>
      {loading ? (
        <p>"is loading"</p>
      ) : (
        <div>
          <ul>
            <li>This</li>
            <li>is</li>
            <li>a</li>
            <li>demo</li>
            <li>component</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Demo;
