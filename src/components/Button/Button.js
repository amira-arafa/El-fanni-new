import React from "react";

const Button = ({ text, icon, className, afterIcon, onClick }) => {
  return (
    <>
      <button className={`${className} low-line-height`} onClick={onClick}>
        {icon && <img src={icon} width="18" height="18" className="mx-1 mb-1" />}
        {text}
        {afterIcon && <img src={afterIcon} width="18" height="18" className="mx-1 mb-1" />}
      </button>
    </>
  );
};

export default Button;
