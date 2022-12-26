import React from "react";
import { FormattedMessage } from "react-intl";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import aboutUsImg from "../../assets/imgs/signUp2.jpeg";
import board from "../../assets/imgs/board.png";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <Header></Header>
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
              </div>
              <div className="w-100 mb-3">
                <img src={aboutUsImg} alt="about-us" width="100%"></img>
              </div>

              <div className="about-us-titles glory-semi-bold" id="mission-and-vision-section">
                <FormattedMessage id="Mission" />
              </div>
              <div className="inter-normal body-1 mb-4">
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
              </div>

              <div className="about-us-titles glory-semi-bold">
                <FormattedMessage id="Vision" />
              </div>
              <div className="inter-normal body-1 mb-4">
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
              </div>

              <div className="about-us-titles glory-semi-bold" id="our-board-section">
                <FormattedMessage id="OurBoard" />
              </div>
              <div className="inter-normal body-1 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
                morbi lorem vehicula ornare pellentesque.
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
                    <a href="#who-we-are-section">
                      <FormattedMessage id="WhoWeAre" />
                    </a>
                  </li>
                  <li className="inter-regular">
                  <a href="#mission-and-vision-section">
                    <FormattedMessage id="MissionAndVission" />
                    </a>
                  </li>
                  <li className="inter-regular">
                     <a href="#our-board-section">
                    <FormattedMessage id="OurBoard" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
