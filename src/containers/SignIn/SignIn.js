import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import Input from "../../components/Input/Input";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/imgs/icons/eyeIcon.png";
import eyeSlash from "../../assets/imgs/icons/eye-slash.svg";
import loginIcon from "../../assets/imgs/icons/loginIcon.png";
import facebookIcon from "../../assets/imgs/icons/facebook.png";
import gmailIcon from "../../assets/imgs/icons/google.png";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import { setCurrentLang } from "../../store/actions/Lang";
import SocialMediaLogin from "../../components/Button/SocialMediaLogin";
import { SUCESS_SIGN_IN } from "../../store/types/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  signIn,
  loginWithFacebook,
  loginWithGoogle,
} from "../../store/actions/auth";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import "./SignIn.scss";

const SignIn = () => {
  const [useEmail, setUseEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const { auth } = useSelector((state) => state);
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") === "ar" ? "ar" : "en"
  );

  useEffect(() => {
    if (auth.sucess_sign_in) {
      navigate("/");
    }
    return () => {
      dispatch({
        type: SUCESS_SIGN_IN,
        payload: false,
      });
    };
  }, [auth.sucess_sign_in, dispatch, navigate]);

  useEffect(() => {
    dispatch(setCurrentLang(language));
  }, [language, dispatch]);

  const responseFacebook = (response) => {
    dispatch(loginWithFacebook({ access_token: response.accessToken }));
  };

  const loginWithGmail = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(loginWithGoogle({ access_token: tokenResponse.access_token }));
    },
  });

  const renderForm = () => {
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

    const onPasswordChange = ({ target }) => {
      const { value } = target;
      setPassword(value);
      !value ? setPasswordErr(true) : setPasswordErr(false);
    };

    const onSubmit = () => {
      !email && setEmailErr(true);
      !phone && setPhoneErr(true);
      !password && setPasswordErr(true);
      if (
        (email || phone) &&
        password &&
        (!emailErr || !phoneErr) &&
        !passwordErr
      ) {
        const data = {
          email,
          phone,
          password,
        };
        const params = {};
        email === "" ? delete data.email : delete data.phone;
        email === "" ? (params.via = "phone") : (params.via = "email");
        dispatch(signIn(data, params));
      }
    };

    return (
      <div className="sign-up-form">
        <div className="pb-4 mobile-logo">
          <div>
            <img
              alt="logo"
              src={logoMobile}
              width="50"
              height="50"
              className="cursor-pointer"
              onClick={() => navigate("/")}
            ></img>
          </div>
          <div className="glory-bold heading-4 mx-2">
            {<FormattedMessage id="ElFanni" />}
          </div>
        </div>
        <div className="mb-0 d-flex align-items-center justify-content-between">
          <p className="glory-semi-bold heading-2 mb-0">
            <FormattedMessage id="signIn" />
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
        <div className="mb-3">
          <p className="text-grey-sub-heading body-1 inter-regular low-line-height mb-0">
            <FormattedMessage id="signInSubtitle" />
          </p>
        </div>
        <div className="mb-2">
          {useEmail ? (
            <div>
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
          ) : (
            <div>
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
          )}
        </div>
        <div className="d-flex justify-content-end cursor-pointer">
          <p
            className="label-1 btnColor inter-semi-bold"
            onClick={() => setUseEmail(!useEmail)}
          >
            {useEmail ? (
              <FormattedMessage id="usePhone" />
            ) : (
              <FormattedMessage id="useEmail" />
            )}
          </p>
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="Password" />}
            type={showNewPass ? "text" : "password"}
            placeholder={intl.formatMessage({ id: "fillPassword" })}
            value={password}
            onChange={(e) => onPasswordChange(e)}
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
              <FormattedMessage id="requiredField" />
            </small>
          )}
        </div>
        <div className="d-flex justify-content-end w-100 mb-3">
          <p
            className="label-1 btnColor inter-semi-bold foretPassword cursor-pointer"
            onClick={() => navigate("/forget-password-email")}
          >
            <FormattedMessage id="forgetPass" />
          </p>
        </div>
        <div className="mb-2">
          <Button
            icon={loginIcon}
            text={intl.formatMessage({ id: "signIn" })}
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
          <FacebookLogin
            textButton={intl.formatMessage({ id: "continueWithFacebook" })}
            icon={
              <img
                alt="facebook-icon"
                src={facebookIcon}
                width="22"
                height="22"
                className="mx-2"
              />
            }
            appId="5925074920847495"
            className="w-100 social-media-btn"
            fields="first_name,last_name,email,picture"
            redirectUri="http://localhost:3000/sign-in"
            callback={responseFacebook}
          />
        </div>
        <div className="mb-3">
          <div onClick={() => loginWithGmail()}>
            <SocialMediaLogin
              icon={gmailIcon}
              text={intl.formatMessage({ id: "continueWithGmail" })}
              className="w-100 social-media-btn"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-baseline">
          <p className="text-grey-sub-heading body-1 inter-regular low-line-height mb-0">
            <FormattedMessage id="dontHaveAcc" />
          </p>
          <p
            className="mx-1 sign-up-btn inter-semi-bold body-1"
            onClick={() => navigate("/sign-up")}
          >
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
