import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import SiteNav from "./SiteNav";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        <nav className="nav-container sidebar hidden" id="sidebar">
          <SiteNav />
          <Button text="Apply now" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
