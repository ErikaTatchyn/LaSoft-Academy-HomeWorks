import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import List from "../../components/List/List";
import MainTitle from "../../components/MainTitle";
import { fetchCourses } from "../../state/coursesSlice";

import "./CourseDetails.css";

export default function Course() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.data);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  const { id } = useParams();
  const course = useMemo(
    () => courses.find((course) => course.id === id) || {},
    [courses, id]
  );
  const { name, level, duration, price, currency, fullImgUrl } = course;
  return (
    <main className="container">
      <div className="course-detail-container ">
        <div className="info-container">
          <MainTitle text={name} />
          <div className="course-details">
            <span className="course-detail">Level:</span>
            <span className="course-detail">{level}</span>
          </div>
          <div className="course-details">
            <span className="course-detail">Duration</span>
            <span className="course-detail">{duration}</span>
          </div>
          <p className="course-detail-text">You will learn:</p>
          <List />
          <div className="course-details-heading">
            <span className="course-detail-title">Price:</span>
            <span className="course-detail-price">
              {price} {currency}
            </span>
          </div>
          <Button text="Apply now" />
        </div>
        <img src={fullImgUrl} alt="course" className="course-img" />
      </div>
    </main>
  );
}
