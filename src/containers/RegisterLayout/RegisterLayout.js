import React from "react";
import "./RegisterLayout.scss";

const RegisterLayout = ({
  logo,
  logoTitle,
  mainTitle,
  form,
  className,
  imageClassName,
}) => {
  return (
    <>
      <div
        className={`${
          className ? className : "align-items-center"
        } d-flex register-layout `}
      >
        <div className={`${imageClassName} col-sm-6 p-t-5 `}>
         
        </div>

        <div className="col-sm-6 p-0 form-register-container">
          <div className="d-flex align-items-center p-a-5 register-mobile">
            <div className="col-sm-12">{form}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLayout;
