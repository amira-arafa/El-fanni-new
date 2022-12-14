import React from "react";

const SocialMediaLogin = ({ text, icon, className }) => {
  return (
    <>
      <div className={`${className} low-line-height d-flex justify-content-center`}>
        {icon && <img src={icon} width="18" height="18" className="mx-2" />}
        {text}
      </div>
    </>
  );
};

export default SocialMediaLogin;
