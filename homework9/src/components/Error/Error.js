import React from "react";

import "./Error.css";

export default function Error() {
  return (
    <div className="error">
      <svg className="social-svg">
        <use href="./img/symbol-defs.svg#icon-error"></use>
      </svg>
      Something is wrong
    </div>
  );
}
