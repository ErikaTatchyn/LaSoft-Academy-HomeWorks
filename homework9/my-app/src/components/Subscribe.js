import React from "react";
import Button from "./Button";
import DescriptionText from "./DescriptionText";

function Subscribe() {
  return (
    <section className="subscribe-section">
      <div className="container reverse-container">
        <div className="subscribe-container">
          <h2 className="subscribe-header">
            Interested but currently have other plans?
          </h2>
          <DescriptionText
            text="Subscribe to our newsletter to stay tuned and get hottest updates
            and deals"
          />

          <Button text="Subscribe" />
        </div>
        <div className="img-container letter-container">
          <img
            src="../img/old-letter1-SA.jpg"
            alt="Old letter"
            className="letter-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
