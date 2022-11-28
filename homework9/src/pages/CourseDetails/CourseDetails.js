import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import List from "../../components/List/List";
import MainTitle from "../../components/MainTitle";

// import courses from "../../mock/courses.json";

import "./CourseDetails.css";

export default function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then(function (response) {
        // handle success
        setCourses(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const { id } = useParams();
  const course = courses.find((course) => course.id === id) || {};
  return (
    <main className="container">
      <div className="course-detail-container ">
        <div className="info-container">
          <MainTitle text={course.name} />
          <div className="course-details">
            <span className="course-datail">Level:</span>
            <span className="course-datail">{course.level}</span>
          </div>
          <div className="course-details">
            <span className="course-datail">Duration</span>
            <span className="course-datail">{course.duration}</span>
          </div>
          <p className="course-detail-text">You will learn:</p>
          <List />
          <div className="course-details-heading">
            <span className="course-detail-title">Price:</span>
            <span className="course-detail-price">
              {course.price} {course.currency}
            </span>
          </div>
          <Button text="Apply now" />
        </div>
        <img src={course.full_img_url} alt="course" className="course-img" />
      </div>
    </main>
  );
}
