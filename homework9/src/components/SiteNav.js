import React from "react";

import NavItem from "./NavItem";

function SiteNav() {
  return (
    <ul className="list site-nav">
      <NavItem text="Courses" />
      <NavItem text="Teachers" />
      <NavItem text="Prices" />
      <NavItem text="About us" />
    </ul>
  );
}

export default SiteNav;
