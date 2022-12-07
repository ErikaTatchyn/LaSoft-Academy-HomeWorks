import React from "react";

import "./TeacherCard.css";

export default function TeacherCard({ teacher }) {
  const { lastName, firstName, courses, education, about } = teacher;
  return (
    <li className="teacher">
      <img src={teacher.photo} alt="" className="teacher-picture" />
      <div className="teacher-container">
        <h2 className="teacher-name">
          {firstName} {lastName}
        </h2>
        <div className="teacher-details">
          <span className="detail-title">Courses:</span>
          <span className="detail">{courses}</span>
        </div>
        <div className="teacher-details">
          <span className="detail-title">Education:</span>
          <span className="detail">{education}</span>
        </div>
        <div className="teacher-details">
          <span className="detail-title">About me:</span>
          <span className="detail">{about}</span>
        </div>
      </div>
    </li>
  );
}
