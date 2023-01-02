import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "../../components/Layout/Header";
import eyeIcon from "../../assets/imgs/icons/eyeIcon.png";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import eyeSlash from "../../assets/imgs/icons/eye-slash.svg";
import { getProfile, submitEditProfile, submitEditPassword } from "../../store/actions/home";
import { useEffect } from "react";
import "./EditProfile.scss";

const EditProfile = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showNewPass, setShowNewPass] = useState(false);
  const [showRepPass, setShowRepPass] = useState(false);
  const [showCurrPass, setShowCurrPass] = useState(false);
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const { home } = useSelector((state) => state);
  const { profile_info } = home;

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onFirstNameChange = ({ target }) => {
    const { value } = target;
    setFirstName(value);
  };

  const onLastNameChange = ({ target }) => {
    const { value } = target;
    setLastName(value);
  };

  const onPhoneChange = (value) => {
    setPhone(value);
  };

  const onPasswordChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };
  const onCurrentPassChange = ({ target }) => {
    const { value } = target;
    setPasswordCurrent(value);
  };

  const onConfirmPassChange = ({ target }) => {
    const { value } = target;
    setPasswordConfirm(value);
  };

  const handleSubmit = () => {
    if (firstName || lastName || phone || email) {
      const data = {};
      if (phone) {
        data.phone = phone;
      }
      if (firstName) {
        data.firstName = firstName;
      }
      if (lastName) {
        data.lastName = lastName;
      }
      if (email) {
        data.email = email;
      }
      dispatch(submitEditProfile(data));
    }
  };

  const HandleSubmitPass = () => {
    if (password && passwordConfirm && passwordCurrent ) {
      const data = {};
      if (password) {
        data.password = password;
      }
      if (passwordConfirm) {
        data.passwordConfirm = passwordConfirm;
      }
      if (passwordCurrent) {
        data.passwordCurrent = passwordCurrent;
      }
      dispatch(submitEditPassword(data));
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (profile_info) {
      setFirstName(profile_info.firstName);
      setLastName(profile_info.lastName);
      setEmail(profile_info.email);
      profile_info.phone && setPhone(profile_info.phone);
    }
  }, [profile_info]);

  return (
    <div>
      <Header></Header>
      <div className="edit-profile-wrapper">
        <p className="btnColor glory-bold heading">
          <FormattedMessage id="editProfile" />
        </p>
        <div className="edit-profile-fields-wrapper">
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="FirstName" />}
                  type="text"
                  value={firstName}
                  onChange={(e) => onFirstNameChange(e)}
                  placeholder={"Ex: Mohamed"}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="lastName" />}
                  type="text"
                  value={lastName}
                  onChange={(e) => onLastNameChange(e)}
                  placeholder={"Ex: Mohamed"}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="Email" />}
                  type={"email"}
                  value={email}
                  onChange={onEmailChange}
                  placeholder={intl.formatMessage({ id: "EmailPlaceHolder" })}
                />
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div className="mb-2">
                <PhoneNumberInput
                  value={phone}
                  onChange={(value) => {
                    onPhoneChange(value);
                  }}
                />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="edit-profile-btns text-end px-0">
                <Button
                  text={intl.formatMessage({ id: "save" })}
                  className="buy-courses-btn inter-semi-bold label-1"
                  onClick={() => handleSubmit()}
                ></Button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="currentPassowrd" />}
                  type={showCurrPass ? "text" : "password"}
                  onChange={(e) => onCurrentPassChange(e)}
                  value={passwordCurrent}
                  placeholder={intl.formatMessage({ id: "fillPassword" })}
                  icon={
                    <img
                      alt="password-icon"
                      src={showCurrPass ? eyeIcon : eyeSlash}
                      onClick={() => setShowCurrPass(!showCurrPass)}
                      width="20"
                      height="20"
                      className="cursor-pointer"
                    />
                  }
                />
              </div>
            </div>
            <div className="col-sm-6">
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
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="repeatNewPass" />}
                  type={showRepPass ? "text" : "password"}
                  value={passwordConfirm}
                  onChange={(e) => onConfirmPassChange(e)}
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
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="edit-profile-btns text-end">
              <Button
                text={intl.formatMessage({ id: "cancel" })}
                className="check-courses-btn inter-semi-bold label-1 mx-3"
                onClick={() => navigate("/profile")}
              ></Button>
            </div>
            <div className="edit-profile-btns text-end">
              <Button
                text={intl.formatMessage({ id: "save" })}
                className="buy-courses-btn inter-semi-bold label-1"
                onClick={()=> HandleSubmitPass()}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
