import React from "react";
import { NavLink } from "react-router-dom";

import "./SiteNav.css";

let activeStyle = {
  color: "#59abb0",
};

function SiteNav() {
  return (
    <ul className="list site-nav">
      <li>
        <NavLink
          to="/courses"
          className="nav-item link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teachers"
          className="nav-item link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Teachers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="nav-item link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About us
        </NavLink>
      </li>
    </ul>
  );
}

export default SiteNav;
