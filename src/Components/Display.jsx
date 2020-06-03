import React, { useState } from "react";
import unsure from "./unsure.jpg";

function Display(props) {
  const [toggle, set] = useState(false);

  return (
    <div className="myHeader">
      <h1>Try the Mystery Counter!</h1>
      <img className="animation" src={unsure} />
    </div>
  );
}

export default Display;
