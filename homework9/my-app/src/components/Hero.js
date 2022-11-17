import React from "react";
import Button from "./Button";
import DescriptionText from "./DescriptionText";
import HeroList from "./HeroList";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-container">
          <h1 className="hero-header">
            Desperate to learn drawing? We’ll teach you!
          </h1>
          <DescriptionText
            text="Our school has more than 20 years of experience in teaching people
            who always thought that they don’t have even a slightest hint of a
            talent. Some other descriptive stuff that I’m too lazy to make up."
          />

          <p className="hero-list-title">With us you will get:</p>
          <HeroList />
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
