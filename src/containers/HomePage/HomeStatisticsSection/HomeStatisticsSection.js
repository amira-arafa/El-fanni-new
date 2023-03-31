import React, { useState, useRef, useEffect } from "react";
import "./HomeStatisticsSection.scss";
import StatisticsCard from "../../../components/StatisticsCard/StatisticsCard";

const HomeStatisticsSection = () => {
  const [number, setNumber] = useState(80);
  const [number1, setNumber1] = useState(90);
  const [number2, setNumber2] = useState(70);
  const [number3, setNumber3] = useState(66);
  const [number4, setNumber4] = useState(20);
  const [number5, setNumber5] = useState(11);
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (entry.intersectionRatio > 0) {
        setNumber(number + 8);
        setNumber1(number1 + 4);
        setNumber2(number2 + 6);
        setNumber3(number3 + 9);
        setNumber4(number4 + 5);
        setNumber5(number5 + 2);
        setTimeout(() => {
          observer.unobserve(myRef.current);
        }, 5000);
      }
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="statistics_home_section">
      <div className="d-flex gap-3 section-upper">
        <div className="col-sm-4">
          <StatisticsCard
            ref={myRef}
            number={number}
            percent="+0.0"
            type="Billion"
            details="Africa’s Population"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            number={number1}
            percent="00"
            type="by 2030"
            details="Africa’s Population under 25"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            number={number2}
            percent=""
            className="percent-3"
            type="Billion"
            details="Allocated by EA to manage African irregular migration"
          />
        </div>
      </div>
      <div className="d-flex gap-3 section-lower">
        <div className="col-sm-4">
          <StatisticsCard
            number={number3}
            percent="00"
            details="Africa’s youth aren’t in education, Employment, or training"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            number={number4}
            type="by 2024"
            details="Middle east’s Population are expected to hit poverty"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            number={number5}
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
