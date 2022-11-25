import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./CourseCard.css";

export default function CourseCard({ course }) {
  return (
    <li className="course">
      <Link to={`/courses/${course.id}`} className="course-link">
        <img src={course.thumbnail_img_url} alt="" className="course-picture" />
        <div className="course-container">
          <div className="course-heading">
            <span className="course-title">{course.name}</span>
            <span className="course-price">
              {course.price} {course.currency}
            </span>
          </div>
          <div className="courses-details">
            <span className="courses-datail-title">Level:</span>
            <span className="courses-datail">{course.level}</span>
          </div>
          <div className="courses-details">
            <span className="courses-datail-title">Duration</span>
            <span className="courses-datail">{course.duration}</span>
          </div>
          <p className="course-description">{course.description_short}</p>
          <Button text="Apply" />
        </div>
      </Link>
    </li>
  );
}
