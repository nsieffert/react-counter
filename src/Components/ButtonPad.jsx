import React, { useState } from "react";

function ButtonPad() {
  const [count, setCount] = useState(0);

  return (
    <div className="buttons">
      <p>Your current Count is {count}:</p>
      <button id="add" onClick={() => setCount(count + 1)}>
        Add One
      </button>
      <button
        onClick={() => setCount(count + 1 + Math.round(Math.random() * 3))}
      >
        Mystery
      </button>
      <button onClick={() => setCount(count - 1)}>Delete One</button>
      <button onClick={() => setCount(count === 0)}>Reset</button>
    </div>
  );
}
export default ButtonPad;
