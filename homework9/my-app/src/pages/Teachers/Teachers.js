import React from "react";

import MainTitle from "../../components/MainTitle";
import TeacherCard from "../../components/TeacherCard";

import teachers from "../../mock/teachers.json";

import "./Teachers.css";

export default function Teachers() {
  return (
    <main className="container">
      <MainTitle text="Meet our great team!" />
      <ul className="teachers list">
        {teachers.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher.id} />
        ))}
      </ul>
    </main>
  );
}
