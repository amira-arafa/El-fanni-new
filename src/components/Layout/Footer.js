import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import twitter from "../../assets/imgs/icons/twitter.jpg";
import youtube from "../../assets/imgs/icons/youtube.jpg";
import facebookFooter from "../../assets/imgs/icons/facebookFooter.jpg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="col-xs-12 col-md-3 footer-icons m-b-3">
          <div className="d-flex align-items-center footer-icons-first">
            <div>
              <img alt="logo" src={logo} width="60px" height="60px"></img>
            </div>
            <div className="text-white glory-bold heading-3 mx-2">
              <FormattedMessage id="ElFanni" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 m-b-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <span className="glory-semi-bold footer-text body-1">
                <FormattedMessage id="termsOfUse" />
              </span>
            </div>
            <div>
              <span className="glory-semi-bold footer-text body-1">
                <FormattedMessage id="privacyPolicy" />
              </span>
            </div>
            <div>
              <span className="glory-semi-bold body-1">
                <FormattedMessage id="contactUs" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-3 footer-icons m-b-3">
          <div className="d-flex align-items-center w-100 footer-icons-end">
            <div>
              <img alt="socialMediaIcon" src={twitter} className="m-x-1"></img>
            </div>
            <div>
              <img alt="socialMediaIcon" src={youtube} className="m-x-1"></img>
            </div>
            <div>
              <img
                alt="socialMediaIcon"
                src={facebookFooter}
                className="m-x-1"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
