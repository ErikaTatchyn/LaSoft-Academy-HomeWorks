import React from "react";

import DescriptionText from "../DescriptionText/DescriptionText";
import SubscribeBtn from "../SubscribeBtn/SubscribeBtn";
import SubscribeModal from "../SubscribeModal/SubscribeModal";

import "./Subscribe.css";

function Subscribe() {
  const [open, setOpen] = React.useState(false);
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
          <SubscribeBtn onClick={() => setOpen(true)} />
        </div>
        <div className="img-container letter-container">
          <img
            src="../img/old-letter1-SA.jpg"
            alt="Old letter"
            className="letter-img"
          />
        </div>
      </div>
      <SubscribeModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default Subscribe;
