import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import more from "../../assets/imgs/icons/more.png";
import "./Header.scss";

const Header2 = () => {
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
          <div class="vl mx-2"></div>
          <div className="mx-2 glory-bold heading-1">Introduction to 3D drawing and piping using 3D Max </div>
          <div className="mx-2"> kora</div>
        
        </div>
      </div>
      <div className="col-sm-2 align-self-center text-end">
      <div>
              <img alt="logo" src={more} width="40px" height="40px"></img>
            </div>
   
      </div>
    </div>
  );
};

export default Header2;
