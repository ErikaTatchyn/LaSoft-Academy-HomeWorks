import clsx from "clsx";
import React from "react";

import "./Burger.module.css";

function Burger(props) {
  return (
    <div
      className={clsx("burger", !props.open && "change")}
      id="burger"
      onClick={props.onClick}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default Burger;
