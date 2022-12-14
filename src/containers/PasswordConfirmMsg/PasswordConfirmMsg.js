import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import "./PasswordConfirmMsg.scss";

const PasswordConfirmMsg = () => {
  const intl = useIntl();
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
        <div className="mb-4">
          <p className="glory-semi-bold heading-2 mb-0 check-pass-msg btnColor">
            <FormattedMessage id="passSuccess" />
          </p>
        </div>
        <div className="mb-2">
          <Button
            text={intl.formatMessage({ id: "signIn" })}
            className="w-100 regular-btn"
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
