import axios from "axios";
import React, { useEffect, useState } from "react";

import MainTitle from "../../components/MainTitle";
import TeacherCard from "../../components/TeacherCard";

import "./Teachers.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/teachers")
      .then(function (response) {
        // handle success
        setTeachers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
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
