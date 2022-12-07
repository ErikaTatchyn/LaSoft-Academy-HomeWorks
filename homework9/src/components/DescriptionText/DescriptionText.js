import React from "react";

import "./DescriptionText.css";

function DescriptionText(props) {
  return <p className="description-text">{props.text}</p>;
}

export default DescriptionText;
