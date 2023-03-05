import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/imgs/icons/footer_logo.png";
import logoName from "../../assets/imgs/icons/El-FANNI_footer.png";
import twitter from "../../assets/imgs/icons/twitter.jpg";
import youtube from "../../assets/imgs/icons/youtube.jpg";
import facebookFooter from "../../assets/imgs/icons/facebookFooter.jpg";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="d-flex align-items-start">
        <div className="col-xs-4 col-lg-4 d-flex align-items-center gap-3">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img alt="footer-logo" src={logo} width="60px" height="60px"></img>
          </div>
          <div
            onClick={() => navigate("/")}
            className=" cursor-pointer text-white glory-bold heading-3 mx-2"
          >
            <img alt="logo-name-container" src={logoName} />
          </div>
        </div>
        <div className="col-lg-8 col-xs-12 d-flex justify-content-between footer-last-sec">
          <div className="col-xs-4">
            <p className="most-visited">
              <FormattedMessage id="most_visited" />
            </p>
            <ul>
              <li>Agricultural course</li>
              <li>Construction course</li>
              <li>Mechanics course</li>
              <li>Electricity course</li>
              <li>Plumbing course</li>
            </ul>
          </div>
          <div className="col-xs-4">
            <p className="most-visited">
              <FormattedMessage id="Terms" />
            </p>
            <ul>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Copyrights</li>
            </ul>
          </div>
          <div className="col-xs-4">
            <p className="most-visited">
              <FormattedMessage id="contactUs" />
            </p>
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
        </div>
      </div>
    </div>
  );
};
export default Footer;
