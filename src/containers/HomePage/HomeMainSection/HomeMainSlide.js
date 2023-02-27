import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Header from "../../../components/Layout/Header";
import "./HomeMainSlide.scss";

const HomeMainSlide = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={`${className} home_main_section_wrapper`}>
      <Header className="home_page" />
      <div className="home-main-content">
        <div className="elfanni-heading col-sm-6">
          <FormattedMessage id="homeMainTitle" />
        </div>
        <Button
          className="header-check-courses-btn"
          onClick={() => navigate("/search-results")}
          text={<FormattedMessage id="checkCourses" />}
        />
      </div>
    </div>
  );
};

export default HomeMainSlide;
