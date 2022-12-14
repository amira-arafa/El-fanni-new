import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import language from "../../assets/imgs/icons/language.png";
import loginIcon from "../../assets/imgs/icons/loginIcon.png";
import search from "../../assets/imgs/icons/search-normal.png";
import category from "../../assets/imgs/icons/category.png";
import menu from "../../assets/imgs/icons/menu.png";
import cart from "../../assets/imgs/icons/shopping-cart.png";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container d-flex">
      <div className="col-sm-8">
        <div className="d-flex align-items-center">
          <div className=" col-sm-5 col-md-3 d-flex align-items-center">
            <div>
              <img alt="logo" src={logo} width="60px" height="60px"></img>
            </div>
            <div className="text-white glory-bold heading-3 mx-2">
              <FormattedMessage id="ElFanni" />
            </div>
          </div>
          <div className="col-sm-7 col-md-9 browse-btn-container">
            <button className="browse-btn body-1">
              <FormattedMessage id="browse" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-4 is-mobile">
        <div className="col-sm-3">
          <img alt="language" src={language} width="22px" height="22px"></img>
          <img
            alt="cart"
            src={cart}
            width="22px"
            height="22px"
            className="m-x-4"
          ></img>
        </div>
        <div className="col-sm-3">
          <span className="inter-semi-bold body-1">
            <FormattedMessage id="aboutUs" />
          </span>
        </div>
        <div className="col-sm-3">
          <div className="d-flex align-items-center">
            <div>
              <span className="inter-semi-bold body-1">
                <FormattedMessage id="search" />
              </span>
            </div>
            <div>
              <img
                alt="search"
                src={search}
                width="20px"
                height="20px"
                className="m-x-1"
              ></img>
            </div>
          </div>
        </div>
        <div className="col-sm-3 cursor-pointer"  onClick={()=> navigate('/sign-in')}>
          <div className=" d-flex align-items-center">
            <div>
              <span className="inter-semi-bold body-1">
                <FormattedMessage id="signIn" />
              </span>
            </div>
            <div>
              <img
                alt="signIn"
                src={loginIcon}
                width="20px"
                height="20px"
                className="m-x-1"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4 mobile-icons">
        <div className="d-flex">
          <div className="col-sm-4">
            <img
              alt="search"
              src={search}
              width="20px"
              height="20px"
              className="m-x-1"
            ></img>
          </div>
          <div className="col-sm-4">
            <img
              alt="category"
              src={category}
              width="20px"
              height="20px"
              className="m-x-1"
            ></img>
          </div>
          <div className="col-sm-4">
            <img
              alt="menu"
              src={menu}
              width="20px"
              height="20px"
              className="m-x-1"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
