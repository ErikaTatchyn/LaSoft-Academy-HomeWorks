import { useState } from "react";
import { useLocation } from "react-router-dom";

import Burger from "../Burger/Burger";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SiteNav from "../SiteNav/SiteNav";

import "./Header.css";
import HeaderBack from "./HeaderBack/HeaderBack";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log("location", location);

  if (location.pathname === "/apply") {
    return <HeaderBack />;
  }

  return (
    <>
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
    </>
  );
}

export default Header;
