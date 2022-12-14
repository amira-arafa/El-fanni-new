import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Header from "../../components/Layout/Header";
import eyeIcon from "../../assets/imgs/icons/eyeIcon.png";
import PhoneNumberInput from "../../components/PhoneNumberInput/PhoneNumberInput";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./EditProfile.scss";

const EditProfile = () => {
  const intl = useIntl();
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
                  placeholder={"Ex: Mohamed"}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="lastName" />}
                  type="text"
                  placeholder={"Ex: Mohamed"}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="Email" />}
                  type={"email"}
                  placeholder={intl.formatMessage({ id: "EmailPlaceHolder" })}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <PhoneNumberInput />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="currentPassowrd" />}
                  type={"passowrd"}
                  placeholder={intl.formatMessage({ id: "fillPassword" })}
                  icon={
                    <img
                      alt="password-icon"
                      src={eyeIcon}
                      width="20"
                      height="20"
                    />
                  }
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="newPassword" />}
                  type={"passowrd"}
                  placeholder={intl.formatMessage({ id: "fillPassword" })}
                  icon={
                    <img
                      alt="password-icon"
                      src={eyeIcon}
                      width="20"
                      height="20"
                    />
                  }
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-2">
                <Input
                  label={<FormattedMessage id="repeatNewPass" />}
                  type={"passowrd"}
                  placeholder={intl.formatMessage({ id: "fillPassword" })}
                  icon={
                    <img
                      alt="password-repeat-icon"
                      src={eyeIcon}
                      width="20"
                      height="20"
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
              ></Button>
            </div>
            <div className="edit-profile-btns text-end">
              <Button
                text={intl.formatMessage({ id: "save" })}
                className="buy-courses-btn inter-semi-bold label-1"
              ></Button>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default EditProfile;
