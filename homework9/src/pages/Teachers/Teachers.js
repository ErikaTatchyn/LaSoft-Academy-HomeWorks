import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainTitle from "../../components/MainTitle";
import TeacherCard from "../../components/TeacherCard";

import { fetchTeachers } from "../../state/teachersSlice";

import "./Teachers.css";

export default function Teachers() {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers.data);
  const status = useSelector((state) => state.teachers.status);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);
  return (
    <main className="container">
      <MainTitle text="Meet our great team!" />
      {status === "loading" && <h2>Loading...</h2>}
      <ul className="teachers list">
        {teachers.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher.id} />
        ))}
      </ul>
    </main>
  );
}
