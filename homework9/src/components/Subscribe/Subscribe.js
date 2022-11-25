import React from "react";
<<<<<<<< HEAD:homework9/src/components/Subscribe/Subscribe.js
import DescriptionText from "../DescriptionText/DescriptionText";
import SubscribeBtn from "../SubscribeBtn/SubscribeBtn";

import "./Subscribe.css";
========

import Button from "./Button";
import DescriptionText from "./DescriptionText";
>>>>>>>> hw9:homework9/src/components/Subscribe.js

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
          <SubscribeBtn />
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
