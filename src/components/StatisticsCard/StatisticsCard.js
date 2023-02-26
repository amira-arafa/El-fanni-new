import React from "react";
import "./StatisticsCard.scss";

const StatisticsCard = ({ percent, note, type, details }) => {
  return (
    <div className="statistics-card-container">
      <div className="d-flex gap-2">
        <div className="percent">{percent}</div>
        <div
          className={`d-flex flex-column ${
            note ? "justify-content-center" : "justify-content-end"
          }`}
        >
          {note && <div className="notes">{note}</div>}
          {type && <div className="type">{type}</div>}
        </div>
      </div>
      <div className="details">{details}</div>
    </div>
  );
};

export default StatisticsCard;
