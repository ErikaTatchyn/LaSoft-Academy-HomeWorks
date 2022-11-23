import React from "react";
import MainTitle from "../components/MainTitle";
import TeacherCard from "../components/TeacherCard";
import teachers from "../mock/teachers.json";

export default function Teachers() {
  return (
    <main>
      <MainTitle text="Meet our great team!" />
      <ul className="teachers">
        {teachers.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher.id} />
        ))}
      </ul>
    </main>
  );
}
