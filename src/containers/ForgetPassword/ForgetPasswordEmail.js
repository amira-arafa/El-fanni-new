import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import Input from "../../components/Input/Input";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import { ForgetPassword } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SUCESS_FORGET_PASS } from "../../store/types/auth";
import { setCurrentLang } from "../../store/actions/Lang";
import "./ForgetPasswordEmail.scss";

const ForgetPasswordEmail = () => {
  const intl = useIntl();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") === "ar" ? "ar" : "en"
  );

  useEffect(() => {
    if (auth.success_forget_pass) {
      navigate("/check-email");
    }
    return () => {
      dispatch({
        type: SUCESS_FORGET_PASS,
        payload: false,
      });
    };
  }, [auth.success_forget_pass, dispatch, navigate]);

  useEffect(() => {
    dispatch(setCurrentLang(language));
  }, [language, dispatch]);

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    !target.value ? setEmailErr(true) : setEmailErr(false);
    if (/\S+@\S+\.\S+/.test(target.value) && target.value) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };

  const onSubmit = () => {
    !email && setEmailErr(true);
    if (email && !emailErr) {
      const data = {
        email,
      };
      dispatch(ForgetPassword(data));
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
        <div className="pb-5 d-flex align-items-center justify-content-between">
          <p className="glory-semi-bold heading-2 mb-0">
            <FormattedMessage id="forgetPassword" />
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
        <div className="mb-4">
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
          <Button
            text={intl.formatMessage({ id: "send" })}
            className="w-100 regular-btn"
            onClick={() => onSubmit()}
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

export default ForgetPasswordEmail;
