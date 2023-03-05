import React from "react";
import Button from "../../../components/Button/Button";
import "./HomeInspireSection.scss";

const HomeInspireSection = ({
  className,
  title,
  subTitle,
  btnText,
  imgSrc,
  btnIcon,
}) => {
  return (
    <div className={`${className} home-inspire-section`}>
      <div className="d-flex justify-content-between gap-3 align-items-center">
        <div className="col-lg-6 col-xs-12">
          {title}
          <p className="sub-title">{subTitle}</p>
          <Button text={btnText} afterIcon={btnIcon} className="btn" />
        </div>
        <div className="col-lg-6 col-xs-12">
          <img src={imgSrc} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default HomeInspireSection;
