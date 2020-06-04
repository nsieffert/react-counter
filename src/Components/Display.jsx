import React, { useState } from "react";
import unsure from "./unsure.jpg";

function Display(props) {
  return (
    <div className="myHeader">
      <h1>Try the Mystery Counter!</h1>

      <img className="animation" src={unsure} />
    </div>
  );
}

export default Display;
