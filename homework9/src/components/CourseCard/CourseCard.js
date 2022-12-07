import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./CourseCard.css";

export default function CourseCard({ course }) {
  const { name, level, currency, duration, descriptionShort } = course;
  return (
    <li className="course">
      <Link to={`/courses/${course.id}`} className="course-link">
        <img src={course.thumbnailImgUrl} alt="" className="course-picture" />
        <div className="course-container">
          <div className="course-heading">
            <span className="course-title">{name}</span>
            <span className="course-price">
              {course.price} {currency}
            </span>
          </div>
          <div className="courses-details">
            <span className="courses-detail-title">Level:</span>
            <span className="courses-detail">{level}</span>
          </div>
          <div className="courses-details">
            <span className="courses-detail-title">Duration</span>
            <span className="courses-detail">{duration}</span>
          </div>
          <p className="course-description">{descriptionShort}</p>
          <Button text="Apply" />
        </div>
      </Link>
    </li>
  );
}
