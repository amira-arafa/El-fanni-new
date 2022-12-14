import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import Input from "../../components/Input/Input";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/imgs/icons/eyeIcon.png";
import loginIcon from "../../assets/imgs/icons/loginIcon.png";
import facebookIcon from "../../assets/imgs/icons/facebook.png";
import gmailIcon from "../../assets/imgs/icons/google.png";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import SocialMediaLogin from "../../components/Button/SocialMediaLogin";
import "./SignIn.scss";

const SignIn = () => {
  const intl = useIntl();
  const navigate = useNavigate();
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
        <div className="mb-0">
          <p className="glory-semi-bold heading-2 mb-0">
            <FormattedMessage id="signIn" />
          </p>
        </div>
        <div className="mb-3">
          <p className="text-grey-sub-heading body-1 inter-regular low-line-height mb-0">
            <FormattedMessage id="signInSubtitle" />
          </p>
        </div>
        <div className="mb-2">
          <PhoneNumberInput />
        </div>
        <div className="d-flex justify-content-end">
          <p className="label-1 btnColor inter-semi-bold">
            <FormattedMessage id="useEmail" />
          </p>
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="newPassword" />}
            type={"passowrd"}
            placeholder={intl.formatMessage({ id: "fillPassword" })}
            icon={
              <img alt="password-icon" src={eyeIcon} width="20" height="20" />
            }
          />
        </div>
        <div className="d-flex justify-content-end w-100 mb-3">
          <p className="label-1 btnColor inter-semi-bold foretPassword">
            <FormattedMessage id="forgetPass" />
          </p>
        </div>
        <div className="mb-2">
          <Button
            icon={loginIcon}
            text={intl.formatMessage({ id: "signIn" })}
            className="w-100 regular-btn"
          />
        </div>
        <div className="d-flex justify-content-center mb-2 body-1 ">
          <p className="mb-0 sign-up-options-or inter-regular">
            <FormattedMessage id="or" />
          </p>
        </div>
        <div className="mb-2">
          <SocialMediaLogin
            icon={facebookIcon}
            text={intl.formatMessage({ id: "continueWithFacebook" })}
            className="w-100 social-media-btn"
          />
        </div>
        <div className="mb-3">
          <SocialMediaLogin
            icon={gmailIcon}
            text={intl.formatMessage({ id: "continueWithGmail" })}
            className="w-100 social-media-btn"
          />
        </div>
        <div className="d-flex justify-content-center align-items-baseline">
          <p className="text-grey-sub-heading body-1 inter-regular low-line-height mb-0">
            <FormattedMessage id="dontHaveAcc" />
          </p>
          <p className="mx-1 sign-up-btn inter-semi-bold body-1" onClick={()=> navigate('/sign-up')}>
            <FormattedMessage id="createAcc" />
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <RegisterLayout
        logo={logo}
        imageClassName={"main-bg-img-v2"}
        logoTitle={<FormattedMessage id="ElFanni" />}
        mainTitle={<FormattedMessage id="signInTitle" />}
        form={renderForm()}
      />
    </>
  );
};

export default SignIn;
