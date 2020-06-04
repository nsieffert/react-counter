import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ButtonPad() {
  const [count, setCount] = useState(0);

  return (
    <div className="buttons">
      <div className="text">What is your current count? {count}</div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Add One
      </button>
      <button className="btn" onClick={() => setCount(count + 2)}>
        Add Two
      </button>
      <button className="btn" onClick={() => setCount(count + 5)}>
        Add Five
      </button>
      <button
        className="btn"
        onClick={() => setCount(count + 1 + Math.round(Math.random() * 3))}
      >
        Mystery
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Delete One
      </button>
      <button className="btn" onClick={() => setCount(count === 0)}>
        Reset
      </button>
    </div>
  );
}
export default ButtonPad;
