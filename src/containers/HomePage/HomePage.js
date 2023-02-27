import React from "react";
import { FormattedMessage } from "react-intl";
import timeImg from "../../assets/imgs/taxi-being-late 2.png";
import helmetImg from "../../assets/imgs/Group 551.png";
import rightArrow from "../../assets/imgs/icons/right-arrow.png";
import HomeMainSection from "./HomeMainSection/HomeMainSection";
import HomeAboutUsSection from "./HomeAboutUsSection/HomeAboutUsSection";
import HomeStatisticsSection from "./HomeStatisticsSection/HomeStatisticsSection";
import HomeOurCoursesSection from "./HomeOurCoursesSection/HomeOurCoursesSection";
import HomeOurLecturersSection from "./HomeOurLecturersSection/HomeOurLecturersSection";
import HomeTestimonialSection from "./HomeTestimonialSection/HomeTestimonialSection";
import HomeInspireSection from "./HomeInspireSection/HomeInspireSection";
import HomeTrustedPartnersSection from "./HomeTrustedPartnersSection/HomeTrustedPartnersSection";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <div className="desktop-view">
        <HomeMainSection />
        <HomeAboutUsSection />
        <HomeStatisticsSection />
        <HomeOurCoursesSection />
        <HomeOurLecturersSection />
        <HomeTestimonialSection />
        <HomeInspireSection
          title={
            <p className="title">
              Do you wish to <span className="sub-word-title">move</span> to a
              country in the EU?
            </p>
          }
          subTitle="Do you aspire to land your dream job in an EU country legally? We’ve got you covered. ELFANNI offers you the chance to be a candidate for an EU job through its partnerships and collaborations with multilateral organizations and private businesses in the EU."
          btnText={<FormattedMessage id="learn_more" />}
          imgSrc={timeImg}
          btnIcon={rightArrow}
          className="move-to-country-section"
        />
        <HomeInspireSection
          title={
            <p className="title">
              Do you <span className="sub-word-title">dream</span> of starting
              your own private business or workshop in your country?
            </p>
          }
          subTitle="ELFANNI got you covered! ELFANNI will help you throughout your entrepreneurial journey of starting your workshop or your small business until you are all set!"
          btnText={<FormattedMessage id="learn_more" />}
          imgSrc={helmetImg}
          btnIcon={rightArrow}
          className="starting-buisiness-section"
        />
        <HomeTrustedPartnersSection />
      </div>
    </div>
  );
};
export default HomePage;
