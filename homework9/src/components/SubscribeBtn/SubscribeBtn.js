import React from "react";
import { Link } from "react-router-dom";

import "./SubscribeBtn.css";

export default function SubscribeBtn() {
  return (
    <Link to="/subscribe" className="link">
      <button className="subscribe-button" data-modal-open type="button">
        Subscribe
      </button>
    </Link>
  );
}
