import React from "react";
import "./CoursesHomeCard.scss";

const CoursesHomeCard = ({ imgSrc, courseTitle }) => {
  return (
    <div className="home-page-courses-card">
      <img src={imgSrc} alt="course-img" />
      <p className="mb-0 course-title">{courseTitle}</p>
    </div>
  );
};

export default CoursesHomeCard;
