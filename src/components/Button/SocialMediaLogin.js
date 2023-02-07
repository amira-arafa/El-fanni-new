import React from "react";

const SocialMediaLogin = ({ text, icon, className, onClick }) => {
  return (
    <>
      <div
        className={`${className} low-line-height d-flex justify-content-center`}
        onClick={onClick}
      >
        {icon && (
          <img
            src={icon}
            width="18"
            height="18"
            className="mx-2"
            alt="social-media-icon"
          />
        )}
        {text}
      </div>
    </>
  );
};

export default SocialMediaLogin;
