import React, { useState, useRef, useEffect } from "react";
import "./HomeStatisticsSection.scss";
import StatisticsCard from "../../../components/StatisticsCard/StatisticsCard";

const HomeStatisticsSection = () => {
  const [number,  setNumber]  = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  
  const myRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (entry.intersectionRatio > 0) {
        setNumber(number + 1.4);
        setNumber1(number1 + 60);
        setNumber2(number2 + 9);
        setNumber3(number3 + 28);
        setNumber4(number4 + 36);
        setNumber5(number5 + 28);
        setTimeout(() => {
          myRef.current && observer.unobserve(myRef.current);
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
            value={number}
            percent="+0.0"
            type="Billion"
            prefix={"+"}
            details="Africa's Population"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            value={number1}
            percent="00"
            prefix={"+"}
            postfix={"%"}
            type="by 2030"
            details="Africa's Population under 25"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            value={number2}
            percent=""
            className="percent-3"
            type="Billion"
            prefix={"$"}
            details="Allocated by EA to manage African irregular migration"
          />
        </div>
      </div>
      <div className="d-flex gap-3 section-lower">
        <div className="col-sm-4">
          <StatisticsCard
            value={number3}
            percent="00"
            postfix={"%"}
            details="Africa's youth aren't in education, Employment, or training"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            percent="00"
            value={number4}
            postfix={"%"}
            type="by 2024"
            details="Middle east's Population are expected to hit poverty"
          />
        </div>
        <div className="col-sm-4">
          <StatisticsCard
            value={number5}
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
