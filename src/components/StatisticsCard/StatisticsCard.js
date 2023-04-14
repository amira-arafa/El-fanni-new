import React, { forwardRef } from "react";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import "./StatisticsCard.scss";

const StatisticsCard = forwardRef(({ prefix, value, postfix, note, type, details }, ref) => {
  return (
    <div className="statistics-card-container" ref={ref}>
      <div className="d-flex gap-2">
        <div className="percent">
          <span>{prefix}</span>
          <AnimatedNumber
            value={value}
            hasComma={true}
            size={55}
            duration={2000}
          />
          <span>{postfix}</span>
        </div>

        <div className={`d-flex flex-column ${ note ? "justify-content-center" : "justify-content-end"}`}>
          {note && <div className="notes">{note}</div>}
          {type && <div className="type">{type}</div>}
        </div>
      </div>
      <div className="details">{details}</div>
    </div>
  );
});

export default StatisticsCard;
