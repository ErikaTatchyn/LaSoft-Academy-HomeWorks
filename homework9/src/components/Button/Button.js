import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

function Button(props) {
  return (
    <Link to="/apply" className="link">
      <button className="button" type="button">
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
