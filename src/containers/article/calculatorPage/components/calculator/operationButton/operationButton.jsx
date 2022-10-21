import React from "react";
import "./operationButton.scss";

const symbols = ["+","-","*","/","=","C"];

function OperationButton(props) {
  return symbols.map((symbol, index) => (
    <button
      key={index}
      onClick={() => {
        props.handlerAction(symbol);
      }}
      className="calculator__operator-button"
    >
      {symbol}
    </button>
  ));
}
export default OperationButton;
