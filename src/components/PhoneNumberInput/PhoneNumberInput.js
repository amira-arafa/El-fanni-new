import React from "react";
import { FormattedMessage } from "react-intl";
import Label from "../Label/Label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneNumberInput.scss";

const PhoneNumberInput = ({value, onChange}) => {
  return (
    <>
      <Label title={<FormattedMessage id="PhoneNumber" />} />
      <PhoneInput
        country={"eg"}
        inputClass={"intl-tel-input"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PhoneNumberInput;
