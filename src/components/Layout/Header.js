import React, { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import language from "../../assets/imgs/icons/language.png";
import loginIcon from "../../assets/imgs/icons/loginIcon.png";
import search from "../../assets/imgs/icons/search-normal.png";
import category from "../../assets/imgs/icons/category.png";
import menu from "../../assets/imgs/icons/menu.png";
import cart from "../../assets/imgs/icons/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../store/actions/auth";
import { SUCESS_LOG_OUT } from "../../store/types/auth";
import Input from "../../components/Input/Input";
import Modal from "../Modal/Modal";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { token, user_data } = auth;

  useEffect(() => {
    if (auth.sucess_logout) {
      navigate("/sign-in");
    }
    return () => {
      dispatch({
        type: SUCESS_LOG_OUT,
        payload: false,
      });
    };
  }, [auth.sucess_logout]);

  const handleLogout = () => {
    dispatch(Logout());
  };
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
        <Modal
          className="header-modal"
          children={
            <div className="col-sm-3">
              <div className="d-flex align-items-baseline cursor-pointer">
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
          }
          modalBody={
            <div>
               <Input
            label={<FormattedMessage id="FirstName" />}
            type="text"
            className="search-input"
            // value={firstName}
            // onChange={(e) => onFirstNameChange(e)}
            placeholder={intl.formatMessage({id:"searchHere"})}
            icon={
              <img
                alt="password-icon"
                src={search}
                width="20"
                height="20"
                className="cursor-pointer"
              />
            }
          />
            </div>
          }
        />

        <div className="col-sm-3 cursor-pointer">
          {localStorage.getItem("user-data") ? (
            <div className="d-flex justify-content-center">
              <div className="dropdown ddp-btn ">
                <div
                  className="dropdown-toggle w-100 course-content-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="logout-user"
                    alt="user-img"
                    src={user_data.photo}
                    width="40"
                    height="40"
                  ></img>
                </div>
                <ul
                  className="dropdown-menu w-100"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={() => navigate("/profile")}>
                    <a className="dropdown-item">
                      <FormattedMessage id="Profile" />
                    </a>
                  </li>
                  <li onClick={() => handleLogout()}>
                    <a className="dropdown-item">
                      <FormattedMessage id="Logout" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div
              className=" d-flex align-items-center"
              onClick={() => navigate("/sign-in")}
            >
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
          )}
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
