import React from "react";

import "./TeacherCard.css";

export default function TeacherCard({ teacher }) {
  return (
    <li className="teacher">
      <img src={teacher.photo} alt="" className="teacher-picture" />
      <div className="teacher-container">
        <h2 className="teacher-name">
          {teacher.first_name} {teacher.last_name}
        </h2>
        <div className="teacher-details">
          <span className="datail-title">Courses:</span>
          <span className="datail">{teacher.courses}</span>
        </div>
        <div className="teacher-details">
          <span className="datail-title">Education:</span>
          <span className="datail">{teacher.education}</span>
        </div>
        <div className="teacher-details">
          <span className="datail-title">About me:</span>
          <span className="datail">{teacher.about}</span>
        </div>
      </div>
    </li>
  );
}
