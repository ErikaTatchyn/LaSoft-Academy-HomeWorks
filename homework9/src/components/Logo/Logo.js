import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="link logo">
      <img src="./img/logo-SA.jpg" alt="logo" />
    </Link>
  );
}

export default Logo;
