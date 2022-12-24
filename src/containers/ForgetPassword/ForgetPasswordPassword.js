import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../assets/imgs/logo.png";
import logoMobile from "../../assets/imgs/logoMobile.png";
import Input from "../../components/Input/Input";
import RegisterLayout from "../RegisterLayout/RegisterLayout";
import eyeIcon from "../../assets/imgs/icons/eyeIcon.png";
import eyeSlash from "../../assets/imgs/icons/eye-slash.svg";
import { ResetPassword } from "../../store/actions/auth";
import { SUCESS_RESET_PASS } from "../../store/types/auth";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ForgetPasswordPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useParams();
  const {auth} = useSelector((state)=> state);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showRepPass, setShowRepPass] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmErr, setPasswordConfirmErr] = useState(false);
  const intl = useIntl();

  useEffect(()=> {
    if(auth.success_reset_pass) {
      navigate("/confirm-password");
    }
    return(()=> {
      dispatch({
        type: SUCESS_RESET_PASS,
        payload: false
      })
    })
  },[auth.success_reset_pass])
  
  const renderForm = () => {
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
      !password && setPasswordErr(true);
      !passwordConfirm && setPasswordConfirmErr(true);
      if (
        password &&
        passwordConfirm &&
        !passwordErr &&
        !passwordConfirmErr
      ) {
        const data = {
          password,
          passwordConfirm,
        };
        dispatch(ResetPassword(data, token));
      }
    };
  

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
        <div className="mb-5 pb-2">
          <p className="glory-semi-bold heading-2 mb-0">
            <FormattedMessage id="forgetPassword" />
          </p>
        </div>
        <div className="mb-2">
          <Input
            label={<FormattedMessage id="newPassword" />}
            type={showNewPass ? "text" : "password"}
            value={password}
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
              <FormattedMessage id="requiredField" />
            </small>
          )}
        </div>
        <div className="mb-4">
          <Input
            label={<FormattedMessage id="repeatNewPass" />}
            placeholder={intl.formatMessage({ id: "fillPassword" })}
            value={passwordConfirm}
            onChange={(e) => onPasswordConfirmChange(e)}
            type={showRepPass ? "text" : "password"}
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
              <FormattedMessage id="requiredField" />
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

export default ForgetPasswordPassword;
