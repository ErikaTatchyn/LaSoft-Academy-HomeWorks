import React from "react";

function Button(props) {
  return (
    <button className="button" type="button">
      {props.text}
    </button>
  );
}

export default Button;
