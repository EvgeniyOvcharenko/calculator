import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";

const buttonsLink = [
  {id: 1, name: "Calculator", link: "/calc" },
  {id: 2, name: "Todo", link: "/todo" },
  {id: 3, name: "Test", link: "/test" },
];

function Button() {
  return buttonsLink.map((value, index) => {
    return (
      <div key={index}>
        <Link className="side-bar__button" to={value.link}>
          {value.name}
        </Link>
      </div>
    );
  });
}

export default Button;
