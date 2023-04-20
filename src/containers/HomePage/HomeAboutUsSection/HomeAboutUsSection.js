// import React, { useState, useEffect, useRef } from "react";
import React from "react";
import { FormattedMessage } from "react-intl";
import addIcon from "../../../assets/imgs/icons/add3.png";
import CollapaseComponent from "../../../components/Collapse/Collapse";
import "./HomeAboutUsSection.scss";

const HomeAboutUsSection = () => {
  // const [visible, setVisible] = useState(false);
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setVisible(entry.isIntersecting);
  //     if (entry.intersectionRatio > 0) {
  //       setTimeout(() => {
  //         observer.unobserve(myRef.current);
  //         setVisible(false);
  //       }, 1000);
  //     }
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <div className="about_us_home_section">
      <div className="content-wrapper">
        <div className="d-flex">
          <div id="accordion">
            <p className="title">
              <FormattedMessage id="aboutUs" />
            </p>
            <CollapaseComponent
              className="about-us-collapse"
              collapseId="about-us-home-mission"
              collapseTitle={
                <div className="d-flex justify-content-between align-items-center content-single-wrapper">
                  <div className="inner-title">
                    <FormattedMessage id="Mission" />
                  </div>
                  <div>
                    <img src={addIcon} alt="Add-icon" />
                  </div>
                </div>
              }
              collapseContent={
                <p className="mb-4">
                  We are a group of educators, former diplomats, academics and investors who share thepassion for providing world-class technical education and training to people in the Middle East& Africa. Our collective understanding of the value of TVET-based skills and careersencouraged us to form a unified approach to TVET that is broad, comprehensive, inclusiveand practicable.
                </p>
              }
            />
            <CollapaseComponent
              className="about-us-collapse"
              collapseId="about-us-home-vision"
              collapseTitle={
                <div className="d-flex justify-content-between align-items-center content-single-wrapper">
                  <div className="inner-title">
                    <FormattedMessage id="Vision" />
                  </div>
                  <div>
                    <img src={addIcon} alt="Add-icon" />
                  </div>
                </div>
              }
              collapseContent={
                <p className="mb-4">
                  Too much focus has been laid upon so-called white-collar jobs such as software development, business administration and other clerical professions following numerous faddish trends. However, very few initiatives have paid proper attention to what really matters: those professions, occupations and skills that keep our lives going smoothly and unimpeded.
                </p>
              }
            />
            <CollapaseComponent
              className="about-us-collapse"
              collapseId="about-us-home-message"
              collapseTitle={
                <div className="d-flex justify-content-between align-items-center content-single-wrapper">
                  <div className="inner-title">
                    <FormattedMessage id="Message" />
                  </div>
                  <div>
                    <img src={addIcon} alt="Add-icon" />
                  </div>
                </div>
              }
              collapseContent={
                <p className="mb-4">
                  ELFANNI is not yet another paid online learning platform, we see ELFANNI as an opportunity platform that offers better future prospects for its members and better qualified candidates for the EU and MEA labor markets.
                </p>
              }
            />
            <CollapaseComponent
              className="about-us-collapse"
              collapseId="about-us-home-strategy"
              collapseTitle={
                <div className="d-flex justify-content-between align-items-center content-single-wrapper-last-child ">
                  <div className="inner-title">
                    <FormattedMessage id="Stratgy" />
                  </div>
                  <div>
                    <img src={addIcon} alt="Add-icon" />
                  </div>
                </div>
              }
              collapseContent={
                <p className="mb-4">
                  We offers a novel model of learning that is tied to the labor market needs in the Middle East, Africa and, most importantly, the EU. El-Fanni managed, through collaboration with TVET-focused educational and training institutions in Italy, to obtain accreditations for its online courses.
                </p>
              }
            />
          </div>
          {/* <div
            ref={myRef}
            className={`col-md-6 map-wrapper ${visible && "map-transition"}`}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUsSection;
