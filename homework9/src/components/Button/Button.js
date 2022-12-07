import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

function Button(props) {
  const { path = "/apply" } = props;
  return (
    <Link to={path} className="link">
      <button className="button" type="button">
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
