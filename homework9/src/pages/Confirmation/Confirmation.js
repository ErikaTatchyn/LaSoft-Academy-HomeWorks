import React from "react";
import { Link } from "react-router-dom";

import DescriptionText from "../../components/DescriptionText/DescriptionText";

import "./Confirmation.css";

export default function Confirmation() {
  return (
    <main className="container confirmation-main">
      <div className="confirmation-container">
        <svg className="done-svg">
          <use href="./img/symbol-defs.svg#icon-done"></use>
        </svg>
        <h1 className="confirmation-title">Thank you!</h1>
        <p className="description-text confirmation-text">
          Check your mailbox. There should be a confirmation letter. We’ll
          contact you soon to give you info about next steps
        </p>
        <Link to="/" className="link">
          <button className="home-button" type="button">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
