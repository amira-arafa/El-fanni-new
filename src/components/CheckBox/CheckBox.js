import React from "react";
import "./CheckBox.scss";

const CheckBox = ({ label, onClick, checked, index }) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={index}
          onClick={onClick}
          checked={checked}
        />
        <label className="form-check-label mx-2 checkbox-title" htmlFor={index}>
          {label}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
