import { useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Burger from "../Burger/Burger";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SiteNav from "../SiteNav/SiteNav";
import HeaderBack from "./HeaderBack/HeaderBack";

import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
            className={clsx("nav-container", "sidebar", open && "hidden")}
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
