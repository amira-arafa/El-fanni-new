import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import { setCurrentLang } from "../../store/actions/Lang";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import "./EmailConfirmMsg.scss";

const EmailConfirmMsg = () => {
  const dispatch = useDispatch();
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
        <div className="mb-5 pb-5 d-flex align-items-center justify-content-between">
          <p className="glory-semi-bold mb-0 check-email-msg">
            <FormattedMessage id="checkEmail" />
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

export default EmailConfirmMsg;
