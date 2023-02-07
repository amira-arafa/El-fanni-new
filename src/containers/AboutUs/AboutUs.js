import React from "react";
import { FormattedMessage } from "react-intl";
import aboutUsImg from "../../assets/imgs/signUp2.jpeg";
import board from "../../assets/imgs/board.png";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-page">
        <div className="about-us-bg-img mb-3">
          <div className="glory-bold heading about-us-header">
            <FormattedMessage id="AboutUs" />
          </div>
        </div>
        <div className="about-us-second-section">
          <div className="row">
            <div className="col-sm-8">
              <div
                className="about-us-titles glory-semi-bold"
                id="who-we-are-section"
              >
                <FormattedMessage id="WhoWeAre" />
              </div>
              <div className="inter-normal body-1 mb-4">
                We are a group of educators, former diplomats, academics and
                investors who share the passion for providing world-class
                technical education and training to people in the Middle East &
                Africa. Our collective understanding of the value of TVET-based
                skills and careers encouraged us to form a unified approach to
                TVET that is broad, comprehensive, inclusive and practicable.
                Our overarching goal is to build a bridge of skill- based
                training and knowledge that begins in the Middle East & Africa
                till it reaches into EU countries. We have become aware of the
                lack of qualified professionals in technical and other relevant
                occupations in the EU and the need thereof. However, we are also
                aware that the current immigration situation is far from being
                optimal. But if we can prepare those who are looking for better
                opportunities in the EU with proper and relevant skill-based
                training and knowledge here in their MEA countries, those who
                will take the decision of moving to EU countries will be better
                off and will have higher chances of landing decent jobs and
                careers as technicians and technical professionals. That’s why
                we do not look at ELFANNI as being yet another paid online
                learning platform, we see ELFANNI as an opportunity platform
                that offers better future prospects for its members and better
                qualified candidates for the EU and MEA labor markets.
              </div>
              <div className="w-100 mb-3">
                <img src={aboutUsImg} alt="about-us" width="100%"></img>
              </div>

              <div
                className="about-us-titles glory-semi-bold"
                id="mission-and-vision-section"
              >
                <FormattedMessage id="MissionAndVision" />
              </div>
              <div className="inter-normal body-1 mb-4">
                Too much focus has been laid upon so-called white-collar jobs
                such as software development, business administration and other
                clerical professions following numerous faddish trends. However,
                very few initiatives have paid proper attention to what really
                matters: those professions, occupations and skills that keep our
                lives going smoothly and unimpeded. Those professionals and
                technicians vouchsafe our welfare through their incredible
                efforts, unfailing commitment and the real-life risks they take
                day to day. ELFANNI was designed with this specific goal in
                mind, a rebalancing act that aims to reinstitute technical
                training and professions as excellent career alternatives in a
                world that is manifestly lacking qualified technical
                professionals and highly skilled technicians.
              </div>

              {/* <div className="about-us-titles glory-semi-bold">
                <FormattedMessage id="Vision" />
              </div> */}
              {/* <div className="inter-normal body-1 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                morbi lorem vehicula ornare pellentesque. Elementum mattis
                tortor mauris, rutrum integer viverra morbi. Leo at mauris nam
                vehicula ornare malesuada id. Velit maecenas nam nascetur et
                natoque tellus. Adipiscing enim tempor mauris justo, est
                hendrerit. Nunc, purus praesent eu vitae euismod phasellus.
                Potenti purus, arcu diam tristique lectus praesent. Ultrices et,
                sit suspendisse id odio in et arcu. Est tellus et, et libero,
                congue. Fringilla quam feugiat diam nibh ut pharetra, semper
                aliquam. Nullam malesuada suspendisse iaculis dolor. Quam mi
                amet, volutpat est integer proin in sed. Ridiculus odio
                elementum sagittis, elit facilisis phasellus feugiat. Mi
                molestie purus sagittis urna cras egestas.
              </div> */}

              <div
                className="about-us-titles glory-semi-bold"
                id="our-board-section"
              >
                <FormattedMessage id="OurBoard" />
              </div>
              <div className="inter-normal body-1 mb-4">
                We pride ourselves in having such a diverse pool of instructors,
                mentors and professionals who share our passion for TVET careers
                and our values of inclusiveness and accessibility. Our mentors
                and instructors will teach in Arabic, English, French and
                Italian and they come from all over the Middle East & Africa.
              </div>
              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <img src={board} alt="board-img"></img>
                </div>
                <div className="col-sm-8">
                  <div className="about-us-subtitle">Owner of El-Fanni</div>
                  <div className="about-us-board-title glory-semi-bold">
                    Eng/ Youssef Mohammed
                  </div>
                  <div className="inter-normal body-1 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lectus nisi bibendum justo, posuere congue sit id. Orci diam
                    id aliquam in felis aenean. Lectus semper urna et eu, et sit
                    mi. Fringilla tincidunt at imperdiet mattis dui. Adipiscing
                    cursus enim posuere at maecenas facilisis phasellus. Id
                    lorem sit praesent sed ante faucibus congue.
                  </div>
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <img src={board} alt="board-img"></img>
                </div>
                <div className="col-sm-8">
                  <div className="about-us-subtitle">Owner of El-Fanni</div>
                  <div className="about-us-board-title glory-semi-bold">
                    Eng/ Youssef Mohammed
                  </div>
                  <div className="inter-normal body-1 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lectus nisi bibendum justo, posuere congue sit id. Orci diam
                    id aliquam in felis aenean. Lectus semper urna et eu, et sit
                    mi. Fringilla tincidunt at imperdiet mattis dui. Adipiscing
                    cursus enim posuere at maecenas facilisis phasellus. Id
                    lorem sit praesent sed ante faucibus congue.
                  </div>
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <img src={board} alt="board-img"></img>
                </div>
                <div className="col-sm-8">
                  <div className="about-us-subtitle">Owner of El-Fanni</div>
                  <div className="about-us-board-title glory-semi-bold">
                    Eng/ Youssef Mohammed
                  </div>
                  <div className="inter-normal body-1 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lectus nisi bibendum justo, posuere congue sit id. Orci diam
                    id aliquam in felis aenean. Lectus semper urna et eu, et sit
                    mi. Fringilla tincidunt at imperdiet mattis dui. Adipiscing
                    cursus enim posuere at maecenas facilisis phasellus. Id
                    lorem sit praesent sed ante faucibus congue.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about-us-navigation  glory-semi-bold">
                <p className="about-us-board-title mb-0">
                  <FormattedMessage id="AboutUs" />
                </p>
                <ul>
                  <li className="inter-regular">
                    <a href="#who-we-are-section ">
                      <FormattedMessage id="WhoWeAre" />
                    </a>
                  </li>
                  <li className="inter-regular">
                    <a href="#mission-and-vision-section ">
                      <FormattedMessage id="MissionAndVission" />
                    </a>
                  </li>
                  <li className="inter-regular">
                    <a href="#our-board-section ">
                      <FormattedMessage id="OurBoard" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
