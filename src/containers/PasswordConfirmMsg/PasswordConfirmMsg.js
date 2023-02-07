import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { setCurrentLang } from "../../store/actions/Lang";
import "./PasswordConfirmMsg.scss";
import { useDispatch } from "react-redux";

const PasswordConfirmMsg = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") === "ar" ? "ar" : "en"
  );
  useEffect(() => {
    dispatch(setCurrentLang(language));
  }, [language, dispatch]);
  
  const renderForm = () => {
    return (
      <div className="sign-up-form">
        <div className="pb-4 mobile-logo">
          <div>
            <img alt="logo" src={logoMobile} width="50" height="50"></img>
          </div>
          <div className="glory-bold heading-4 mx-2">
            {<FormattedMessage id="ElFanni" />}
          </div>
        </div>
        <div className="mb-4 d-flex align-items-center justify-content-between">
          <p className="glory-semi-bold heading-2 mb-0 check-pass-msg btnColor">
            <FormattedMessage id="passSuccess" />
          </p>
          <div>
            <a
              className="cursor-pointer"
              onClick={() => {
                language === "ar" ? setLanguage("en") : setLanguage("ar");
              }}
            >
              {language === "ar" ? "AR" : "EN"}
            </a>
          </div>
        </div>
        <div className="mb-2">
          <Button
            text={intl.formatMessage({ id: "signIn" })}
            className="w-100 regular-btn"
            onClick={() => navigate("/sign-in")}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <RegisterLayout
        logo={logo}
        className="forget-pass-parent"
        imageClassName={"main-bg-img-v2"}
        logoTitle={<FormattedMessage id="ElFanni" />}
        mainTitle={<FormattedMessage id="signInTitle" />}
        form={renderForm()}
      />
    </>
  );
};

export default PasswordConfirmMsg;
