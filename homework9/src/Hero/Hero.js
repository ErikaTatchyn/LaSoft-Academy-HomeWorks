import React from "react";

import Button from "../components/Button/Button";
import DescriptionText from "../components/DescriptionText/DescriptionText";
import List from "../components/List/List";
import MainTitle from "../components/MainTitle";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero">
        <div className="hero-container">
          <MainTitle text="Desperate to learn drawing? We’ll teach you!" />
          <DescriptionText
            text="Our school has more than 20 years of experience in teaching people
            who always thought that they don’t have even a slightest hint of a
            talent. Some other descriptive stuff that I’m too lazy to make up."
          />

          <p className="hero-list-title">With us you will get:</p>
          <List />
          <Button text="Apply now" />
        </div>
        <div className="img-container">
          <img src="./img/paris1-SA.jpg" alt="Paris" className="paris-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
