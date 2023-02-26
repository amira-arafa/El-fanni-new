import React from "react";
import "./HomeStatisticsSection.scss";
import StatisticsCard from "../../../components/StatisticsCard/StatisticsCard";

const HomeStatisticsSection = () => {
  return (
    <div className="statistics_home_section">
      <div className="d-flex gap-3 section-upper">
        <div className="col-sm-4">
          <StatisticsCard
            percent="+0.0"
            type="Billion"
            details="Africa’s Population"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            type="by 2030"
            details="Africa’s Population under 25"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            type="Billion"
            details="Allocated by EA to manage African irregular migration"
          />
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            details="Africa’s youth aren’t in education, Employment, or training"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            type="by 2024"
            details="Middle east’s Population are expected to hit poverty"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            note={"(14% of Workforce)"}
            type="occupations"
            details="Experience labour shortages in European Union Countries"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeStatisticsSection;
