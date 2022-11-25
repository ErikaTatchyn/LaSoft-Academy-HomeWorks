import React from "react";

import styles from "./Burger.module.css";

function Burger(props) {
  return (
    <div
      // className={`burger ${props.open ? "change" : ""}`}
      className={styles.burger}
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
