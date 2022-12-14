import React from "react";
import "./RegisterLayout.scss";

const RegisterLayout = ({ logo, logoTitle, mainTitle, form , className, imageClassName}) => {
  return (
    <>
      <div className={`${className? className : 'align-items-center'} d-flex register-layout `}>
        <div className={`${imageClassName}  col-sm-6 p-t-5 `}>
          <div className="d-flex align-items-center pb-4">
            <div>
              <img alt="logo" src={logo}></img>
            </div>
            <div className="text-white glory-bold heading-4 mx-2">
              {logoTitle}
            </div>
          </div>
          <div className="d-flex  ">
            <p className="text-white heading-2 glory-semi-bold medium-line-height">{mainTitle}</p>
          </div>
        </div> 

        <div className="col-sm-6 p-0 form-register-container">
          <div className="d-flex align-items-center p-a-5 ">
            <div className="col-sm-12">{form}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLayout;
