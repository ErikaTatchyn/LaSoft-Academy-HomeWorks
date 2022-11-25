import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

import "./HeaderBack.css";

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="container header-back-container">
        <Logo />
        <Link to="/courses" className="link">
          <div className="back-container">
            <svg className="back-svg">
              <use href="./img/symbol-defs.svg#icon-back"></use>
            </svg>
            <span className="back-text">Back</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
