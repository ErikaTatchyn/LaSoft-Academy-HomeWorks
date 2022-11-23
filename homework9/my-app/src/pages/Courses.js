import React from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import MainTitle from "../components/MainTitle";
import courses from "../mock/courses.json";

export default function Courses() {
  console.log(courses);
  return (
    <main>
      <MainTitle text="Pick your perfect course!" />
      <ul className="courses">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </main>
  );
}
