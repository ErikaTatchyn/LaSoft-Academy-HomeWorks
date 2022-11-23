import React from "react";
import Button from "../Button";

export default function CourseCard({ course }) {
  return (
    <li className="course">
      <img src={course.thumbnail_img_url} alt="" className="course-picture" />
      <div className="course-container">
        <div className="course-heading">
          <span className="course-title">{course.name}</span>
          <span className="course-price">
            {course.price}
            {course.currency}
          </span>
        </div>
        <div className="course-details">
          <span className="datail-title">Level:</span>
          <span className="datail">{course.level}</span>
        </div>
        <p className="course-description">{course.description_short}</p>
        <Button text="Apply" />
      </div>
    </li>
  );
}
