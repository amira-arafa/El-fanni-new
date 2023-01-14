import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import more from "../../assets/imgs/icons/more.png";
import cupIcon from "../../assets/imgs/icons/cup.png";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header2 = () => {
  const { home } = useSelector((state) => state);
  const { course_info } = home;
  return (
    <div className="header-container d-flex">
      <div className="col-sm-10">
        <div className="d-flex align-items-center ">
          <div className="d-flex align-items-center">
            <div>
              <img alt="logo" src={logo} width="60px" height="60px"></img>
            </div>
            <div className="text-white glory-bold heading-3 mx-2">
              <FormattedMessage id="ElFanni" />
            </div>
          </div>
          <div className="vl mx-2"></div>
          <div className="mx-2 glory-bold heading-1">{course_info.title} </div>
          <div className="mx-2 course-progress"> 
            <img src={cupIcon} alt="cup icon"/>
            <p className="m-0">Finished</p>
            <p>0%</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2 align-self-center text-end">
      <div>
        <img alt="menu" src={more} width="40px" height="40px" className="menu"></img>
      </div>
      </div>
    </div>
  );
};

export default Header2;
