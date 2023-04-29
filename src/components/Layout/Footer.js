import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/imgs/logo-white-latest.png";
import twitter from "../../assets/imgs/icons/twitter.jpg";
import youtube from "../../assets/imgs/icons/youtube.jpg";
import globe from "../../assets/imgs/icons/global.png";
import angleDown from "../../assets/imgs/icons/angle-down.png";
import facebookFooter from "../../assets/imgs/icons/facebookFooter.jpg";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-container-wrapper">
      <div className="d-flex align-items-start">
        <div className="col-lg-8 col-xs-12 d-flex justify-content-between footer-last-sec">

          <div className="">
            <p className="footer-ul-title">
              <FormattedMessage id="about" />
            </p>
            <ul>
              <li onClick={() => { navigate("/about-us") }} className="cursor-pointer">
                <FormattedMessage id="Mission" />
              </li>
              <li onClick={() => navigate("/about-us")} className="cursor-pointer">
                <FormattedMessage id="Vission" />
              </li>
              <li onClick={() => navigate("/about-us")} className="cursor-pointer">
                <FormattedMessage id="Message" />
              </li>
              <li onClick={() => navigate("/about-us")} className="cursor-pointer">
                <FormattedMessage id="Strategy" />
              </li>
            </ul>
          </div>

          <div className="">
            <p className="footer-ul-title">
              <FormattedMessage id="courses" />
            </p>
            <ul>
              <li onClick={() => navigate("/search-results")} className="cursor-pointer">
                <FormattedMessage id="technical" />
              </li>
              <li onClick={() => navigate("/search-results")} className="cursor-pointer">
                <FormattedMessage id="language" />
              </li>
              <li onClick={() => navigate("/search-results")} className="cursor-pointer">
                <FormattedMessage id="entrepreneurship" />
              </li>
              <li onClick={() => navigate("/search-results")} className="cursor-pointer">
                <FormattedMessage id="bundels" />
              </li>
            </ul>
          </div>

          <div className="">
            <p className="footer-ul-title">
              <FormattedMessage id="EUJobs" />
            </p>
            <ul>
              <li className="cursor-pointer">
                <FormattedMessage id="italy" />
              </li>
              <li className="cursor-pointer">
                <FormattedMessage id="germany" />
              </li>
              <li className="cursor-pointer">
                <FormattedMessage id="restOfEU" />
              </li>
            </ul>
          </div>

          <div className="">
            <p className="footer-ul-title">
              <FormattedMessage id="ourTeam" />
            </p>
            <ul>
              <li className="cursor-pointer">
                <FormattedMessage id="executiveBoard" />
              </li>
              <li className="cursor-pointer">
                <FormattedMessage id="advisoryBoard" />
              </li>
            </ul>
          </div>

          <div className="">
            <p className="footer-ul-title">
              <FormattedMessage id="contacts" />
            </p>
            <ul>
              <li className="cursor-pointer">
                <FormattedMessage id="dubai" />
              </li>
              <li className="cursor-pointer">
                <FormattedMessage id="rome" />
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">

        <div className="d-flex align-items-center me-4">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img alt="footer-logo" src={logo} width="100%" height="100%"></img>
          </div>
        </div>

        <ul className="inline-list d-flex flex-row justify-content-around">
          <li className="cursor-pointer">
            <FormattedMessage id="help" />
          </li>
          <li className="cursor-pointer">
            <FormattedMessage id="faqs" />
          </li>
          <li className="cursor-pointer">
            <FormattedMessage id="pricing" />
          </li>
          <li className="cursor-pointer">
            <FormattedMessage id="Terms" />
          </li>
          <li className="cursor-pointer">
            <FormattedMessage id="privacy" />
          </li>
          <li className="cursor-pointer">
            <FormattedMessage id="copyrights" />
          </li>
        </ul>

        <div className="social-media-wrapper">
          <div className="col-xs-12 col-md-3 footer-icons m-b-3">
            <div className="d-flex align-items-center w-100 footer-icons-end">
              <div>
                <img
                  alt="socialMediaIcon"
                  src={facebookFooter}
                  className="m-x-1"
                ></img>
              </div>
              <div>
                <img
                  alt="socialMediaIcon"
                  src={twitter}
                  className="m-x-1"
                ></img>
              </div>
              <div>
                <img
                  alt="socialMediaIcon"
                  src={youtube}
                  className="m-x-1"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer">
          <div className="d-flex justify-content-center lang-dropdown">
            <div className="dropdown ddp-btn ">
              <div
                className="lang-dropdown-toggle w-100 course-content-btn"
                type="button"
                id="langDropdown"
                data-bs-toggle="dropdown"
                role="menuitem"
              >
                <img
                  src={globe}
                  className="me-2"
                  alt="globe"
                  width="20px"
                  height="20px"
                />
                <span className="Glory-semi-bold body-1">
                  <FormattedMessage id="english" />
                </span>
                <img
                  src={angleDown}
                  className="ms-2"
                  alt="globe"
                  width="20px"
                  height="20px"
                />
              </div>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="langDropdown"
              >
                <li>
                  <span className="dropdown-item cursor-pointer">
                    <FormattedMessage id="arabic" />
                  </span>
                </li>
                <li>
                  <span className="dropdown-item cursor-pointer">
                    <FormattedMessage id="english" />
                  </span>
                </li>
                <li>
                  <span className="dropdown-item cursor-pointer">
                    <FormattedMessage id="french" />
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default Footer;
