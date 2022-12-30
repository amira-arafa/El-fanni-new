import React from "react";
import "./CheckBox.scss"

const CheckBox = ({ label, onClick }) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={onClick}
        />
        <label className="form-check-label mx-2 checkbox-title" for="flexCheckDefault">
          {label}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
