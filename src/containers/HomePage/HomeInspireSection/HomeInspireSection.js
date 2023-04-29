import React, {useState, useEffect, useRef } from "react";
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
  const [visible, setVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting)
      if(entry.intersectionRatio > 0) {
        setTimeout(() => {
          myRef.current && observer.unobserve(myRef.current);
          setVisible(false)
        }, 3000);
      }
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div ref={myRef} className={`${className} home-inspire-section ${visible && "home-inspire-animation"}`}>
      <div className="d-flex justify-content-between gap-3 align-items-center">
        <div className="col-lg-6 col-xs-12 first-section">
          {title}
          <p className="sub-title">{subTitle}</p>
          <Button text={btnText} afterIcon={btnIcon} className="btn" />
        </div>
        <div className="col-lg-6 col-xs-12 second-section">
          <img src={imgSrc} alt="home-img" />
        </div>
      </div>
    </div>
  );
};

export default HomeInspireSection;
