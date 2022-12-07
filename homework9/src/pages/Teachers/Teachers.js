import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MainTitle from "../../components/MainTitle";
import TeacherCard from "../../components/TeacherCard";

import { fetchTeachers } from "../../state/teachersSlice";

import "./Teachers.css";

export default function Teachers() {
  const dispatch = useDispatch();
  const { data: teachers, status } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
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
