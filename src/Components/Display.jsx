import React, { useState } from "react";
import confused from "./confused.jpg";

function Display(props) {
  const [display, setDisplay] = useState(0);
  const [toggle, set] = useState(false);

  return (
    <div className="myHeader">
      <h1>Try the Mystery Counter!</h1>
      <img className="animation" src={confused} />
    </div>
  );
}

export default Display;
