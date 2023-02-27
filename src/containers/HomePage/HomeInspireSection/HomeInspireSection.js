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
        <div className="col-sm-6">
          {title}
          <p className="sub-title">{subTitle}</p>
          <Button text={btnText} afterIcon={btnIcon} className="btn" />
        </div>
        <div className="col-sm-6">
          <img src={imgSrc} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default HomeInspireSection;
