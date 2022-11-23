import React from "react";
import Button from "../components/Button";
import MainTitle from "../components/MainTitle";
import DescriptionText from "../components/DescriptionText";

export default function Apply(course) {
  return (
    <main>
      <div className="container">
        <div className="info-container">
          <MainTitle text="Apply to desired course right away!" />
          <DescriptionText text="Select desired course and group, leave us your contact information and we’ll reach out to you for confirmation and letting you know about further steps" />
          <form />
          <Button text="Apply now" />
        </div>
        <img src="./img/apply.png" alt="course" />
      </div>
    </main>
  );
}
