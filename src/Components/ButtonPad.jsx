import React, { useState } from "react";

function ButtonPad() {
  const [count, setCount] = useState(0);

  return (
    <div className="buttons">
      <span>Your Current Count Is: {count}</span>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Add One
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
