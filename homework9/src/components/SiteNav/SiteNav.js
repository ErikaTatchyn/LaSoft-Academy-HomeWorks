import React from "react";
import { NavLink } from "react-router-dom";

import "./SiteNav.css";

const activeStyle = {
  color: "#59abb0",
};

const links = [
  {
    path: "/courses",
    title: "Courses",
  },
  {
    path: "/teachers",
    title: "Teachers",
  },
  {
    path: "/about",
    title: "About us",
  },
];

function SiteNav() {
  return (
    <ul className="list site-nav">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className="nav-item link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SiteNav;
