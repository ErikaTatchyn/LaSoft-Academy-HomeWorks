import React from "react";

import Burger from "../Burger/Burger";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SiteNav from "../SiteNav/SiteNav";

import "./Header.css";

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Burger open={open} onClick={() => setOpen(!open)} />
      <header className="header">
        <div className="container header-container">
          <Logo />
          <nav
            className={`nav-container sidebar ${!open ? "hidden" : ""}`}
            id="sidebar"
          >
            <SiteNav />
            <Button text="Apply" />
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
