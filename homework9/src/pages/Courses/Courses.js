import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CourseCard from "../../components/CourseCard/CourseCard";
import MainTitle from "../../components/MainTitle";

import { setCoursesData, fetchCourses } from "../../state/coursesSlice";

import "./Courses.css";

export default function Courses() {
  // const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.data);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <main className="container">
      <MainTitle text="Pick your perfect course!" />
      <ul className="list courses">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </main>
  );
}
