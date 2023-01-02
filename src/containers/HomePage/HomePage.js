import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import arrowRight from "../../assets/imgs/icons/arrow-right.png";
import arrowLogo from "../../assets/imgs/icons/arrow-right-white.png";
import aboutUsIcon1 from "../../assets/imgs/aboutUsIcon1.png";
import aboutUsIcon2 from "../../assets/imgs/aboutUsImg2.png";
import painting from "../../assets/imgs/painting.jpeg";
import painting2 from "../../assets/imgs/painting2.jpeg";
import table from "../../assets/imgs/table.jpeg";
import jsIcon from "../../assets/imgs/js.png";
import topCoursesIcon1 from "../../assets/imgs/topcourses1.png";
import topCoursesIcon2 from "../../assets/imgs/topcourses2.png";
import topCoursesIcon3 from "../../assets/imgs/topcourses3.png";
import certificateIcon from "../../assets/imgs/certificate.png";
import teacher1 from "../../assets/imgs/teacher1.png";
import teacher2 from "../../assets/imgs/teacher2.png";
import teacher3 from "../../assets/imgs/teacher3.png";
import teacher4 from "../../assets/imgs/teacher4.png";
import star from "../../assets/imgs/icons/star.png";
import star2 from "../../assets/imgs/icons/vector.png";
import partner1 from "../../assets/imgs/icons/partner1.png";
import partner2 from "../../assets/imgs/icons/partner2.png";
import partner3 from "../../assets/imgs/icons/partner3.png";
import partner4 from "../../assets/imgs/icons/partner4.png";
import partner5 from "../../assets/imgs/icons/partner5.png";
import quoteUpIcon from "../../assets/imgs/icons/quote-down.png";
import quoteDownIcon from "../../assets/imgs/icons/quote-up.png";
import cafe from "../../assets/imgs/cafe.jpeg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import CarouselComponent from "../../components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1250 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1250, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <Header />
      <div className="desktop-view">
        <main>
          <div className="d-flex">
            <div className="home-img-1">
              <div className="home-bg-img-1"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-2"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-3"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-4"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-5"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="home-img-2">
              <div className="home-bg-img-6"></div>
              <div className="home-bg-img-7"></div>
            </div>
            <div className="home-img-3">
              <div className="main-section">
                <p className="glory-semi-bold home-main-title">
                  <FormattedMessage id="homeMainTitle" />
                </p>
                <p className="body-1 inter-regular home-secondary-title">
                  <FormattedMessage id="homeSecondTitle" />
                </p>
                <Button
                  afterIcon={arrowRight}
                  onClick={()=> navigate("/search-results")}
                  text={intl.formatMessage({ id: "checkCourses" })}
                  className="check-courses-btn inter-semi-bold body-1"
                ></Button>
              </div>
            </div>
            <div className="home-img-2">
              <div className="home-bg-img-8"></div>
              <div className="home-bg-img-9"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="home-img-1">
              <div className="home-bg-img-10"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-11"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-12"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-13"></div>
            </div>
            <div className="home-img-1">
              <div className="home-bg-img-14"></div>
            </div>
          </div>
        </main>
      </div>
      <div className="mobile-view">
        <div className="d-flex">
          <div className="home-mob-img-1">
            <div className="home-bg-img-5"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-4"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-3"></div>
          </div>
        </div>
        <div className="d-flex">
          <div className="home-mob-img-1">
            <div className="home-bg-img-8"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-1"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-2"></div>
          </div>
        </div>
        <div className="d-flex">
          <div className="home-mob-img-1">
            <div className="home-bg-img-7"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-6"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-11"></div>
          </div>
        </div>
        <div className="d-flex">
          <div className="home-mob-img-1">
            <div className="home-bg-img-10"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-14"></div>
          </div>
          <div className="home-mob-img-1">
            <div className="home-bg-img-9"></div>
          </div>
        </div>
        <div className="home-over-lay">
          <div className="main-section">
            <p className="glory-semi-bold heading-2 home-main-title">
              <FormattedMessage id="homeMainTitle" />
            </p>
            <p className="body-1 inter-regular home-secondary-title">
              <FormattedMessage id="homeSecondTitle" />
            </p>
            <Button
              afterIcon={arrowRight}
              onClick={()=> navigate("/search-results")}
              text={intl.formatMessage({ id: "checkCourses" })}
              className="check-courses-btn inter-semi-bold body-1"
            ></Button>
          </div>
        </div>
      </div>
      <div className="about-us-section pb-5">
        <div className="d-flex flex-wrap mb-5">
          <div className="col-xs-12 col-md-6 about-us-secondary-section">
            <p className="label-1 inter-regular about-us-title mb-0">
              <FormattedMessage id="aboutUs" />
            </p>
            <p className="gilory-semi-bold heading-5">
              <FormattedMessage id="whoWeAre" />
            </p>
            <p className=" inter-regular label-1 about-us-text">
              <FormattedMessage id="aboutUsFirstSecText" />
            </p>
            <span className="inter-semi-bold body-1">
              <FormattedMessage id="readMore" />
            </span>
            <span className="mx-1">
              <img alt="arrow" src={arrowLogo} />{" "}
            </span>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="about-us-img">
              <img alt="aboutUs" src={aboutUsIcon1}></img>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap about-us-container">
          <div className="col-md-6 col-xs-12">
            <div className="about-us-img-2">
              <img alt="aboutUs2" src={aboutUsIcon2}></img>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 about-us-secondary-section">
            <p className="label-1 inter-regular about-us-title mb-0">
              <FormattedMessage id="content" />
            </p>
            <p className="gilory-semi-bold heading-5">
              <FormattedMessage id="ourValue" />
            </p>
            <p className=" inter-regular label-1 about-us-text">
              <FormattedMessage id="aboutUsFirstSecText" />
            </p>
            <span className="inter-semi-bold body-1">
              <FormattedMessage id="knowMoreAbout" />
            </span>
            <span className="mx-1">
              <img alt="arrow" src={arrowLogo} />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="categories-section">
        <div>
          <p className="glory-semi-bold heading-4 btnColor">
            <FormattedMessage id="Categories" />
          </p>
          <p className="inter-regular body-1 categories-text">
            <FormattedMessage id="categoriesText" />
          </p>
        </div>
        <div className="mb-5">
          <CarouselComponent
            responsive={responsive}
            autoPlay={true}
            interval={2600}
            infiniteLoop={true}
            infinite={true}
          >
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting2} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>javascript</p>
                </div>
                <div className="col-sm-6">
                  <img src={jsIcon} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Plumbing</p>
                </div>
                <div className="col-sm-6">
                  <img src={cafe} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Tailor</p>
                </div>
                <div className="col-sm-6">
                  <img src={table} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting} alt="category-carousel-img" />
                </div>
              </div>
            </div>

            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting2} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>javascript</p>
                </div>
                <div className="col-sm-6">
                  <img src={jsIcon} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Plumbing</p>
                </div>
                <div className="col-sm-6">
                  <img src={cafe} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Tailor</p>
                </div>
                <div className="col-sm-6">
                  <img src={table} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Plumbing</p>
                </div>
                <div className="col-sm-6">
                  <img src={cafe} alt="category-carousel-img" />
                </div>
              </div>
            </div>
          </CarouselComponent>
        </div>
        <div className="mb-5">
          <CarouselComponent
            responsive={responsive}
            autoPlay={true}
            interval={2600}
            infiniteLoop={true}
            infinite={true}
            slidesToSlide={2}
          >
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting2} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>javascript</p>
                </div>
                <div className="col-sm-6">
                  <img src={jsIcon} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Plumbing</p>
                </div>
                <div className="col-sm-6">
                  <img src={cafe} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Tailor</p>
                </div>
                <div className="col-sm-6">
                  <img src={table} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting} alt="category-carousel-img" />
                </div>
              </div>
            </div>

            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting2} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>javascript</p>
                </div>
                <div className="col-sm-6">
                  <img src={jsIcon} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Plumbing</p>
                </div>
                <div className="col-sm-6">
                  <img src={cafe} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Tailor</p>
                </div>
                <div className="col-sm-6">
                  <img src={table} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>painting</p>
                </div>
                <div className="col-sm-6">
                  <img src={painting} alt="category-carousel-img" />
                </div>
              </div>
            </div>
            <div className="categories-carousel-card">
              <div className="d-flex categories-carousel-card-container ">
                <div className="col-sm-6 category-carousel-text">
                  <p>Plumbing</p>
                </div>
                <div className="col-sm-6">
                  <img src={cafe} alt="category-carousel-img" />
                </div>
              </div>
            </div>
          </CarouselComponent>
        </div>
        <div className="top-courses">
          <p className="glory-semi-bold heading-4 btnColor">
            <FormattedMessage id="topCourses" />
          </p>
          <div>
            <CarouselComponent
              responsive={responsive}
              autoPlay={true}
              interval={2600}
              infiniteLoop={true}
              infinite={true}
              slidesToSlide={1}
            >
              <div className="top-courses-card">
                <img src={topCoursesIcon1} alt="top-courses-img" />
                <p className="glory-semi-bold top-courses-title mb-1 ">
                  Learning semi conductors for electrical education
                </p>
                <div className="d-flex align-items-end">
                  <div className="col-sm-6">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <span className="m-e-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img
                          src={star2}
                          alt="star"
                          width="13px"
                          heigth="13px"
                        />
                      </span>
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (24)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <Button
                      className="best-sellter-btn inter-regular"
                      text={intl.formatMessage({ id: "BestSeller" })}
                    ></Button>
                  </div>
                </div>
              </div>

              <div className="top-courses-card">
                <img src={topCoursesIcon3} alt="top-courses-img" />
                <p className="glory-semi-bold top-courses-title mb-1 ">
                  Learning semi conductors for electrical education
                </p>
                <div className="d-flex align-items-end">
                  <div className="col-sm-6">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <span className="m-e-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img
                          src={star2}
                          alt="star"
                          width="13px"
                          heigth="13px"
                        />
                      </span>
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (24)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <Button
                      className="best-sellter-btn inter-regular"
                      text={intl.formatMessage({ id: "BestSeller" })}
                    ></Button>
                  </div>
                </div>
              </div>

              <div className="top-courses-card">
                <img src={topCoursesIcon2} alt="top-courses-img" />
                <p className="glory-semi-bold top-courses-title mb-1 ">
                  Learning semi conductors for electrical education
                </p>
                <div className="d-flex align-items-end">
                  <div className="col-sm-6">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <span className="m-e-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img
                          src={star2}
                          alt="star"
                          width="13px"
                          heigth="13px"
                        />
                      </span>
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (24)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <Button
                      className="best-sellter-btn inter-regular"
                      text={intl.formatMessage({ id: "BestSeller" })}
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="top-courses-card">
                <img src={topCoursesIcon3} alt="top-courses-img" />
                <p className="glory-semi-bold top-courses-title mb-1 ">
                  Learning semi conductors for electrical education
                </p>
                <div className="d-flex align-items-end">
                  <div className="col-sm-6">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <span className="m-e-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img
                          src={star2}
                          alt="star"
                          width="13px"
                          heigth="13px"
                        />
                      </span>
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (24)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <Button
                      className="best-sellter-btn inter-regular"
                      text={intl.formatMessage({ id: "BestSeller" })}
                    ></Button>
                  </div>
                </div>
              </div>

              <div className="top-courses-card">
                <img src={topCoursesIcon1} alt="top-courses-img" />
                <p className="glory-semi-bold top-courses-title mb-1 ">
                  Learning semi conductors for electrical education
                </p>
                <div className="d-flex align-items-end">
                  <div className="col-sm-6">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <span className="m-e-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img
                          src={star2}
                          alt="star"
                          width="13px"
                          heigth="13px"
                        />
                      </span>
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (24)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <Button
                      className="best-sellter-btn inter-regular"
                      text={intl.formatMessage({ id: "BestSeller" })}
                    ></Button>
                  </div>
                </div>
              </div>

              <div className="top-courses-card">
                <img src={topCoursesIcon2} alt="top-courses-img" />
                <p className="glory-semi-bold top-courses-title mb-1 ">
                  Learning semi conductors for electrical education
                </p>
                <div className="d-flex align-items-end">
                  <div className="col-sm-6">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <span className="m-e-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="m-x-1 align-text-bottom">
                        <img
                          src={star2}
                          alt="star"
                          width="13px"
                          heigth="13px"
                        />
                      </span>
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (24)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <Button
                      className="best-sellter-btn inter-regular"
                      text={intl.formatMessage({ id: "BestSeller" })}
                    ></Button>
                  </div>
                </div>
              </div>
            </CarouselComponent>
          </div>
        </div>
      </div>
      <div className="certificate-section">
        <div className="certificate-titles">
          <p className="label-1 inter-regular certificate-section-title mb-0">
            <FormattedMessage id="CoursesCertificate" />
          </p>
          <p className="glory-semi-bold heading-5 btnColor">
            <FormattedMessage id="certificateSectionTitle" />
          </p>
          <p className="inter-regular body-1">
            <FormattedMessage id="certificateSectionText" />
          </p>
        </div>
        <img src={certificateIcon} alt="certificate-icon"></img>
      </div>
      <div className="lecturers-section about-us-section text-center">
        <p className="gilory-semi-bold heading-5">
          <FormattedMessage id="OurLecturers" />
        </p>
        <p className=" inter-regular label-1 lecturers-text w-75 m-auto">
          <FormattedMessage id="lecturesFirstTitle" />
        </p>
        <div className="lectures-scroll-container">
          <div className="d-flex lecturer-list mt-3">
            <div className="our-lecturer-card">
              <img src={teacher1} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="col-sm-6">
                  <div className="text-grey-sub-heading inter-regular label-1">
                    Mohammed Ayman
                  </div>
                </div>
              </div>
            </div>
            <div className="our-lecturer-card">
              <img src={teacher2} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="col-sm-6">
                  <div className="text-grey-sub-heading inter-regular label-1">
                    Mohammed Ayman
                  </div>
                </div>
              </div>
            </div>
            <div className="our-lecturer-card">
              <img src={teacher3} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="col-sm-6">
                  <div className="text-grey-sub-heading inter-regular label-1">
                    Mohammed Ayman
                  </div>
                </div>
              </div>
            </div>
            <div className="our-lecturer-card">
              <img src={teacher4} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="col-sm-6">
                  <div className="text-grey-sub-heading inter-regular label-1">
                    Mohammed Ayman
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="gilory-semi-bold heading-5 mt-5">
          <FormattedMessage id="OurStudents" />
        </p>
        <p className=" inter-regular label-1 lecturers-text w-75 m-auto">
          <FormattedMessage id="lecturesSecondTitle" />
        </p>
        <div className="lectures-scroll-container">
          <div className="d-flex lecturer-list mt-3">
            <div className="our-students-card">
              <div className="mb-2">
                <img src={quoteUpIcon} alt="quoteUpIcon"></img>
              </div>
              <div className="students-text mb-2 inter-regular body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                neque, odio fringilla vitae pretium accumsan. Odio vulputate
                porttitor semper ipsum ut sed malesuada ipsum. Eu, eget vitae
                nulla commodo. Sagittis pellentesque nisi adipiscing risus.
              </div>
              <div className="text-end">
                <img src={quoteDownIcon} alt="quoteDonwIcon"></img>
              </div>
              <div className="d-flex student-info">
                <div className="col-sm-2">
                  <img src={teacher4} alt="student-img" />
                </div>
                <div className="col-sm-10">
                  <div className="student-name inter-semi-bold body-1">
                    John Doe
                  </div>
                  <div className="student-school label-1 inter-regular">
                    Student at Alexandria Technical School{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="our-students-card">
              <div className="mb-2">
                <img src={quoteUpIcon} alt="quoteUpIcon"></img>
              </div>
              <div className="students-text mb-2 inter-regular body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                neque, odio fringilla vitae pretium accumsan. Odio vulputate
                porttitor semper ipsum ut sed malesuada ipsum. Eu, eget vitae
                nulla commodo. Sagittis pellentesque nisi adipiscing risus.
              </div>
              <div className="text-end">
                <img src={quoteDownIcon} alt="quoteDonwIcon"></img>
              </div>
              <div className="d-flex student-info">
                <div className="col-sm-2">
                  <img src={teacher4} alt="student-img" />
                </div>
                <div className="col-sm-10">
                  <div className="student-name inter-semi-bold body-1">
                    John Doe
                  </div>
                  <div className="student-school label-1 inter-regular">
                    Student at Alexandria Technical School{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="our-students-card">
              <div className="mb-2">
                <img src={quoteUpIcon} alt="quoteUpIcon"></img>
              </div>
              <div className="students-text mb-2 inter-regular body-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                neque, odio fringilla vitae pretium accumsan. Odio vulputate
                porttitor semper ipsum ut sed malesuada ipsum. Eu, eget vitae
                nulla commodo. Sagittis pellentesque nisi adipiscing risus.
              </div>
              <div className="text-end">
                <img src={quoteDownIcon} alt="quoteDonwIcon"></img>
              </div>
              <div className="d-flex student-info">
                <div className="col-sm-2">
                  <img src={teacher4} alt="student-img" />
                </div>
                <div className="col-sm-10">
                  <div className="student-name inter-semi-bold body-1">
                    John Doe
                  </div>
                  <div className="student-school label-1 inter-regular">
                    Student at Alexandria Technical School{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-section glory-semi-bold heading-4">
        <p className="mb-1"><FormattedMessage id="trustedPartners"/></p>
        <div className="partners-container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="partner-img-container"><img src={partner1}></img></div>
          <div className="partner-img-container"><img src={partner2}></img></div>
          <div className="partner-img-container"><img src={partner3}></img></div>
          <div className="partner-img-container"><img src={partner4}></img></div>
          <div className="partner-img-container"><img src={partner2}></img></div>
          <div className="partner-img-container"><img src={partner1}></img></div>

        </div>
        </div>

      </div>

      <Footer />
    </>
  );
};
export default HomePage;
