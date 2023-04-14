import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getInitialCount = () => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? JSON.parse(storedCount) : 0;
  };
  const [count, setCount] = useState(getInitialCount());
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  });
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button className="btn" onClick={incrementCount}>
        Click me!
      </button>
      <h2 style={{ color: "white" }}>
        You clicked <span style={{ color: "red" }}>{count}</span> times.
      </h2>
    </div>
  );
}

export default App;
