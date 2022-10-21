import React from "react";
import Calculator from "./components/calculator/calculator";
import "./calculatorPage.scss";

function CalculatorPage() {
  return (
    <div className="calculator-page">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
