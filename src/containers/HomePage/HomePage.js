import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import arrowRight from "../../assets/imgs/icons/arrow-right.png";
import arrowLogo from "../../assets/imgs/icons/arrow-right-white.png";
import aboutUsIcon1 from "../../assets/imgs/aboutUsIcon1.png";
import aboutUsIcon2 from "../../assets/imgs/aboutUsImg2.png";
import { Rating } from "react-simple-star-rating";
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
import partner1 from "../../assets/imgs/icons/partner1.png";
import partner2 from "../../assets/imgs/icons/partner2.png";
import partner3 from "../../assets/imgs/icons/partner3.png";
import partner4 from "../../assets/imgs/icons/partner4.png";
import quoteUpIcon from "../../assets/imgs/icons/quote-down.png";
import quoteDownIcon from "../../assets/imgs/icons/quote-up.png";
import cafe from "../../assets/imgs/cafe.jpeg";
import Button from "../../components/Button/Button";
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
    <div className="home-page-wrapper">
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
                  onClick={() => navigate("/search-results")}
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
            <div>
              <p className="glory-semi-bold heading-2 home-main-title">
                <FormattedMessage id="homeMainTitle" />
              </p>
            </div>
            <div>
              <p className="body-1 inter-regular home-secondary-title">
                <FormattedMessage id="homeSecondTitle" />
              </p>
            </div>
            <div>
              <Button
                afterIcon={arrowRight}
                onClick={() => navigate("/search-results")}
                text={intl.formatMessage({ id: "checkCourses" })}
                className="check-courses-btn inter-semi-bold body-1"
              ></Button>
            </div>
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
              We are a group of educators, former diplomats, academics and
              investors who share the passion for providing world-class
              technical education and training to people in the Middle East &
              Africa. Our collective understanding of the value of TVET-based
              skills and careers encouraged us to form a unified approach to
              TVET that is broad, comprehensive, inclusive and practicable. Our
              overarching goal is to build a bridge of skill- based training and
              knowledge that begins in the Middle East & Africa till it reaches
              into EU countries. We have become aware of the lack of qualified
              professionals in technical and other relevant occupations in the
              EU and the need thereof. However, we are also aware that the
              current immigration situation is far from being optimal. But if we
              can prepare those who are looking for better opportunities in the
              EU with proper and relevant skill-based training and knowledge
              here in their MEA countries, those who will take the decision of
              moving to EU countries will be better off and will have higher
              chances of landing decent jobs and careers as technicians and
              technical professionals. That’s why we do not look at ELFANNI as
              being yet another paid online learning platform, we see ELFANNI as
              an opportunity platform that offers better future prospects for
              its members and better qualified candidates for the EU and MEA
              labor markets.
            </p>
            <span
              className="inter-semi-bold body-1 cursor-pointer"
              onClick={() => navigate("/about-us")}
            >
              <FormattedMessage id="readMore" />
            </span>
            <span className="mx-1">
              <img alt="arrow" src={arrowLogo} />{" "}
            </span>
          </div>
          <div className="col-md-6 col-xs-12 d-flex align-items-center">
            <div className="about-us-img">
              <img alt="aboutUs" src={aboutUsIcon1}></img>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap about-us-container">
          <div className="col-md-6 col-xs-12 d-flex align-items-center">
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
              Too much focus has been laid upon so-called white-collar jobs such
              as software development, business administration and other
              clerical professions following numerous faddish trends. However,
              very few initiatives have paid proper attention to what really
              matters: those professions, occupations and skills that keep our
              lives going smoothly and unimpeded. Those professionals and
              technicians vouchsafe our welfare through their incredible
              efforts, unfailing commitment and the real-life risks they take
              day to day. ELFANNI was designed with this specific goal in mind,
              a rebalancing act that aims to reinstitute technical training and
              professions as excellent career alternatives in a world that is
              manifestly lacking qualified technical professionals and highly
              skilled technicians.
            </p>
            <span
              className="inter-semi-bold body-1 cursor-pointer"
              onClick={() => navigate("/about-us")}
            >
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
            interval={6000}
            infiniteLoop={true}
            infinite={true}
            slidesToSlide={1}
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
                  <div className="col-sm-7">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (40)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex justify-content-end">
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
                  <div className="col-sm-7">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (60)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex justify-content-end">
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
                  <div className="col-sm-7">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (4.5)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex justify-content-end">
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
                  <div className="col-sm-7">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (9)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex justify-content-end">
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
                  <div className="col-sm-7">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (4.5)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex justify-content-end">
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
                  <div className="col-sm-7">
                    <div className="text-grey-sub-heading inter-regular label-1">
                      Mohammed Ayman
                    </div>
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        (4.5)
                      </span>
                    </div>
                    <div>
                      <span className="inter-semi-bold old-price">200 EGP</span>
                      <span className="inter-regular new-price mx-1">
                        550 EGP
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 d-flex justify-content-end">
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
        <p className=" inter-regular label-1 lecturers-text m-auto">
          We pride ourselves in having such a diverse pool of instructors,
          mentors and professionals who share our passion for TVET careers and
          our values of inclusiveness and accessibility. Our mentors and
          instructors will teach in Arabic, English, French and Italian and they
          come from all over the Middle East & Africa.
        </p>
        <div className="lectures-scroll-container">
          <div className="d-flex lecturer-list mt-3">
            <div className="our-lecturer-card">
              <img src={teacher1} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="text-grey-sub-heading inter-regular label-1">
                  Mohammed Ayman
                </div>
              </div>
            </div>
            <div className="our-lecturer-card">
              <img src={teacher2} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="text-grey-sub-heading inter-regular label-1">
                  Mohammed Ayman
                </div>
              </div>
            </div>
            <div className="our-lecturer-card">
              <img src={teacher3} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="text-grey-sub-heading inter-regular label-1">
                  Mohammed Ayman
                </div>
              </div>
            </div>
            <div className="our-lecturer-card">
              <img src={teacher4} alt="top-courses-img" />
              <p className="glory-semi-bold lecturer-name mb-1 mt-2">
                Eng. Mostafa Khalifa
              </p>
              <div className="d-flex align-items-end">
                <div className="text-grey-sub-heading inter-regular label-1">
                  Mohammed Ayman
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="gilory-semi-bold heading-5 mt-5">
          <FormattedMessage id="OurStudents" />
        </p>
        <p className=" inter-regular label-1 lecturers-text m-auto">
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
        <p className="mb-1 btnColor heading-5">
          <FormattedMessage id="trustedPartners" />
        </p>
        <div className="partners-container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="partner-img-container">
              <img alt="partner" src={partner1}></img>
            </div>
            <div className="partner-img-container">
              <img alt="partner" src={partner2}></img>
            </div>
            <div className="partner-img-container">
              <img alt="partner" src={partner3}></img>
            </div>
            <div className="partner-img-container">
              <img alt="partner" src={partner4}></img>
            </div>
            <div className="partner-img-container">
              <img alt="partner" src={partner2}></img>
            </div>
            <div className="partner-img-container">
              <img alt="partner" src={partner1}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
