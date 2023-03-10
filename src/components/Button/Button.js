import React from "react";

const Button = ({ text, icon, className, afterIcon, onClick, style }) => {
  return (
    <>
      <button
        className={`${className} btn-component-wrapper low-line-height`}
        onClick={onClick}
      >
        {icon && (
          <img
            src={icon}
            width="18"
            height="18"
            className="mx-1 mb-1 before-icon"
            alt="btn-icon"
          />
        )}
        <span>{text}</span>
        {afterIcon && (
          <img
            src={afterIcon}
            width="18"
            height="18"
            className="mx-1 after-icon"
            alt="btn-icon"
          />
        )}
      </button>
    </>
  );
};

export default Button;
