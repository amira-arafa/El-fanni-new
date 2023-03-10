import React from "react";
import { FormattedMessage } from "react-intl";
import addIcon from "../../../assets/imgs/icons/add3.png";
import mapImg from "../../../assets/imgs/worldMap.png";
import CollapaseComponent from "../../../components/Collapse/Collapse";
import "./HomeAboutUsSection.scss";

const HomeAboutUsSection = () => {
  return (
    <div className="about_us_home_section">
      <div className="content-wrapper">
        <p className="title">
          <FormattedMessage id="aboutUs" />
        </p>
        <div className="d-flex">
          <div className="col-xs-12 col-md-6">
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
                  Too much focus has been laid upon so-called white-collar jobs
                  such as software development, business administration and
                  other clerical professions following numerous faddish trends.
                  However, very few initiatives have paid proper attention to
                  what really matters: those professions, occupations and skills
                  that keep our lives going smoothly and unimpeded. Those
                  professionals and technicians vouchsafe our welfare through
                  their incredible efforts, unfailing commitment and the
                  real-life risks they take day to day. ELFANNI was designed
                  with this specific goal in mind, a rebalancing act that aims
                  to reinstitute technical training and professions as excellent
                  career alternatives in a world that is manifestly lacking
                  qualified technical professionals and highly skilled
                  technicians.
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
                  Too much focus has been laid upon so-called white-collar jobs
                  such as software development, business administration and
                  other clerical professions following numerous faddish trends.
                  However, very few initiatives have paid proper attention to
                  what really matters: those professions, occupations and skills
                  that keep our lives going smoothly and unimpeded. Those
                  professionals and technicians vouchsafe our welfare through
                  their incredible efforts, unfailing commitment and the
                  real-life risks they take day to day. ELFANNI was designed
                  with this specific goal in mind, a rebalancing act that aims
                  to reinstitute technical training and professions as excellent
                  career alternatives in a world that is manifestly lacking
                  qualified technical professionals and highly skilled
                  technicians.
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
                  Too much focus has been laid upon so-called white-collar jobs
                  such as software development, business administration and
                  other clerical professions following numerous faddish trends.
                  However, very few initiatives have paid proper attention to
                  what really matters: those professions, occupations and skills
                  that keep our lives going smoothly and unimpeded. Those
                  professionals and technicians vouchsafe our welfare through
                  their incredible efforts, unfailing commitment and the
                  real-life risks they take day to day. ELFANNI was designed
                  with this specific goal in mind, a rebalancing act that aims
                  to reinstitute technical training and professions as excellent
                  career alternatives in a world that is manifestly lacking
                  qualified technical professionals and highly skilled
                  technicians.
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
                  Too much focus has been laid upon so-called white-collar jobs
                  such as software development, business administration and
                  other clerical professions following numerous faddish trends.
                  However, very few initiatives have paid proper attention to
                  what really matters: those professions, occupations and skills
                  that keep our lives going smoothly and unimpeded. Those
                  professionals and technicians vouchsafe our welfare through
                  their incredible efforts, unfailing commitment and the
                  real-life risks they take day to day. ELFANNI was designed
                  with this specific goal in mind, a rebalancing act that aims
                  to reinstitute technical training and professions as excellent
                  career alternatives in a world that is manifestly lacking
                  qualified technical professionals and highly skilled
                  technicians.
                </p>
              }
            />
          </div>
          <div className="col-md-6 map-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUsSection;
