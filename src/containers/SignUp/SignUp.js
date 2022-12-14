import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import Input from "../../components/Input/Input";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import eyeIcon from "../../assets/imgs/icons/eyeIcon.png";
import eyeSlash from "../../assets/imgs/icons/eye-slash.svg";
import addIcon from "../../assets/imgs/icons/add.png";
import facebookIcon from "../../assets/imgs/icons/facebook.png";
import gmailIcon from "../../assets/imgs/icons/google.png";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import SocialMediaLogin from "../../components/Button/SocialMediaLogin";
import { signUp } from "../../store/actions/auth";
import "./SignUp.scss";
import { useDispatch } from "react-redux";
import history from "../../routes/History";

const SignUp = () => {
  const intl = useIntl();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showRepPass, setShowRepPass] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmErr, setPasswordConfirmErr] = useState(false);
  const dispatch = useDispatch();

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    !target.value ? setEmailErr(true) : setEmailErr(false);
    if (/\S+@\S+\.\S+/.test(target.value) && target.value) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };

  const onPhoneChange = (value) => {
    setPhone(value);
    !value ? setPhoneErr(true) : setPhoneErr(false);
  };
  const onFirstNameChange = ({ target }) => {
    const { value } = target;
    setFirstName(value);
    !value ? setFirstNameErr(true) : setFirstNameErr(false);
  };
  const onLastNameChange = ({ target }) => {
    const { value } = target;
    setLastName(value);
    !value ? setLastNameErr(true) : setLastNameErr(false);
  };

  const onPasswordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
    !value ? setPasswordErr(true) : setPasswordErr(false);
  };

  const onPasswordConfirmChange = ({ target }) => {
    const { value } = target;
    setPasswordConfirm(value);
    !value ? setPasswordConfirmErr(true) : setPasswordConfirmErr(false);
    if (value && value === password) {
      setPasswordConfirmErr(false);
    } else {
      setPasswordConfirmErr(true);
    }
  };

  const onSubmit = () => {
    history.push("/")
    if (
      email &&
      phone &&
      firstName &&
      lastName &&
      password &&
      passwordConfirm &&
      !emailErr &&
      !phoneErr &&
      !firstNameErr &&
      !lastNameErr &&
      !passwordErr &&
      !passwordConfirmErr
    ) {
      const data = {
        email,
        phone,
        firstName,
        lastName,
        password,
        passwordConfirm,
      };
      dispatch(signUp(data));
    }
  };

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
            <FormattedMessage id="createAcc" />
          </p>
        </div>
        <div className="mb-3">
          <p className="text-grey-sub-heading body-1 inter-regular low-line-height mb-0">
            <FormattedMessage id="signUpSubHeadingForm" />
          </p>
        </div>
        <div className="mb-2">
          <PhoneNumberInput
            value={phone}
            onChange={(value) => {
              onPhoneChange(value);
            }}
          />
          {phoneErr && !phone && (
            <small className="text-danger label-1">
              <FormattedMessage id="requiredField" />
            </small>
          )}
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="Email" />}
            type={"email"}
            value={email}
            onChange={onEmailChange}
            placeholder={intl.formatMessage({ id: "EmailPlaceHolder" })}
          />
          {emailErr && !email && (
            <small className="text-danger label-1">
              <FormattedMessage id="requiredField" />
            </small>
          )}
          {emailErr && email && (
            <small className="text-danger label-1">
              <FormattedMessage id="emailFieldValidation" />
            </small>
          )}
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="FirstName" />}
            type="text"
            value={firstName}
            onChange={(e) => onFirstNameChange(e)}
            placeholder={"Ex: Mohamed"}
          />
          {firstNameErr && !firstName && (
            <small className="text-danger label-1">
              <FormattedMessage id="emailFieldValidation" />
            </small>
          )}
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="lastName" />}
            type="text"
            value={lastName}
            onChange={(e) => onLastNameChange(e)}
            placeholder={"Ex: Mohamed"}
          />
          {lastNameErr && !lastName && (
            <small className="text-danger label-1">
              <FormattedMessage id="emailFieldValidation" />
            </small>
          )}
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="newPassword" />}
            value={password}
            type={showNewPass ? "text" : "password"}
            onChange={(e) => onPasswordChange(e)}
            placeholder={intl.formatMessage({ id: "fillPassword" })}
            icon={
              <img
                alt="password-icon"
                src={showNewPass ? eyeIcon : eyeSlash}
                onClick={() => setShowNewPass(!showNewPass)}
                width="20"
                height="20"
                className="cursor-pointer"
              />
            }
          />
          {passwordErr && !password && (
            <small className="text-danger label-1">
              <FormattedMessage id="emailFieldValidation" />
            </small>
          )}
        </div>
        <div className="mb-4">
          <Input
            label={<FormattedMessage id="repeatNewPass" />}
            value={passwordConfirm}
            onChange={(e) => onPasswordConfirmChange(e)}
            type={showRepPass ? "text" : "password"}
            placeholder={intl.formatMessage({ id: "fillPassword" })}
            icon={
              <img
                alt="password-repeat-icon"
                src={showRepPass ? eyeIcon : eyeSlash}
                onClick={() => setShowRepPass(!showRepPass)}
                width="20"
                height="20"
                className="cursor-pointer"
              />
            }
          />
          {passwordConfirmErr && !passwordConfirm && (
            <small className="text-danger label-1">
              <FormattedMessage id="emailFieldValidation" />
            </small>
          )}
          {passwordConfirmErr && passwordConfirm && (
            <small className="text-danger label-1">
              <FormattedMessage id="passwordValidation" />
            </small>
          )}
        </div>
        <div className="mb-2">
          <Button
            icon={addIcon}
            text={intl.formatMessage({ id: "createAnAcoount" })}
            className="w-100 regular-btn"
            onClick={() => onSubmit()}
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
            <FormattedMessage id="haveAcc" />
          </p>
          <p className="mx-1 sign-up-btn inter-semi-bold body-1">
            <FormattedMessage id="signInNow" />
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <RegisterLayout
        logo={logo}
        imageClassName={"main-bg-img"}
        logoTitle={<FormattedMessage id="ElFanni" />}
        mainTitle={<FormattedMessage id="signUpTitle" />}
        form={renderForm()}
      />
    </>
  );
};

export default SignUp;
