import React from "react";
import Display from "./Display";
import ButtonPad from "./ButtonPad";

function Counter() {
  return (
    <div className="display">
      <Display />
      <ButtonPad />
    </div>
  );
}

export default Counter;
