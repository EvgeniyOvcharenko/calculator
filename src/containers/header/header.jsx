import React from "react";
import logo from "../../img/logo.png";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <span className="header__title">
        My react project<sup className="header__title-support">UA</sup>
      </span>
    </header>
  );
}

export default Header;
