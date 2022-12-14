import React from "react";
import Label from "../Label/Label";

const Input = ({ label, type, placeholder, icon, value, onChange }) => {
  return (
    <>
      <Label title={label} />
      <input 
        type={type} 
        className="w-100"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      {icon}
    </>
  );
};

export default Input;
