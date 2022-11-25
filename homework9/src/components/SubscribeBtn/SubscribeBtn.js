import React from "react";

import "./SubscribeBtn.css";

export default function SubscribeBtn(props) {
  return (
    <button
      className="subscribe-button"
      data-modal-open
      type="button"
      onClick={props.onClick}
    >
      Subscribe
    </button>
  );
}
