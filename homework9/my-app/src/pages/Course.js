import React from "react";
import Button from "../components/Button";
import List from "../components/List";
import MainTitle from "../components/MainTitle";
import courses from "../mock/courses.json";

export default function Course() {
  return (
    <main>
      <div className="container">
        <div className="info-container">
          <MainTitle text={courses.course.name} />
          <div className="course-details">
            <span className="datail-title">Level:</span>
            <span className="datail">{courses.course.level}</span>
          </div>
          <List />
          <div className="course-heading">
            <span className="course-title">Price:</span>
            <span className="course-price">
              {course.price}
              {course.currency}
            </span>
          </div>
          <Button text="Apply now" />
        </div>
        <img src={courses.course.full_img_url} alt="course" />
      </div>
    </main>
  );
}
