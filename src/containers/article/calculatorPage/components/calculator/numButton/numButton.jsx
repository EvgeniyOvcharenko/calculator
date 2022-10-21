import React from "react";
import "./numButton.scss";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

function NumButton(props) {
  return numbers.map((number, index) => (
    <button
      key={index}
      onClick={() => {
        props.handlerInput(number);
      }}
      className="calculator__operand-button"
    >
      {number}
    </button>
  ));
}
export default NumButton;
