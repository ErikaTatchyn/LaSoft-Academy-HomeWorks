import React from "react";

import CourseCard from "../../components/CourseCard/CourseCard";
import MainTitle from "../../components/MainTitle";

import courses from "../../mock/courses.json";

import "./Courses.css";

export default function Courses() {
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
