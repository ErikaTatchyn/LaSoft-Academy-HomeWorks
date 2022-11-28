import axios from "axios";
import React, { useEffect, useState } from "react";

import CourseCard from "../../components/CourseCard/CourseCard";
import MainTitle from "../../components/MainTitle";

import "./Courses.css";

export default function Courses() {
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
