import React from "react";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Button from "../../components/Button/Button";
import star from "../../assets/imgs/icons/star.png";
import teacher4 from "../../assets/imgs/teacher4.png";
import star2 from "../../assets/imgs/icons/vector.png";
import certificate2 from "../../assets/imgs/certificate2.png";
import playIcon from "../../assets/imgs/icons/play-circle.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import { FormattedMessage, useIntl } from "react-intl";
import "./CoursePage.scss";

const CoursePage = () => {
  const intl = useIntl();
  return (
    <>
      <Header></Header>
      <div className="course-section-wrapper">
        <div className="d-flex course-first-section">
          <div className="col-sm-7">
            <div className="mb-2 best-seller-section">
              <div className="mobile-section-course">
                {" "}
                <FormattedMessage id="course" />{" "}
              </div>
              <div>
                <Button
                  className="best-sellter-btn inter-regular"
                  text={intl.formatMessage({ id: "BestSeller" })}
                ></Button>
              </div>
            </div>
            <p className="heading-4  glory-semi-bold w-75">
              Learning semi conductors for electrical education cation cation
              caion
            </p>
            <p className="course-subheader inter-regular w-75 mb-1">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue et
              faucibus nulla vulputate blandit consequat. Nulla at orci diam
              malesuada et volutpat vitae.
            </p>
            <div className="course-rating-instructor  mb-1">
              <span className="inter-regular label-1">
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star2} alt="star" width="13px" heigth="13px" />
                </span>
                <span className="top-courses-rating inter-regular label-1 m-x-1">
                  (24)
                </span>
              </span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="course-rating-instructor languages-difficulty-wrapper  mb-1">
              <span className="inter-regular label-1">
                Mohammed Karim w kda
              </span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-4">
              <span className="inter-semi-bold new-price body-1">200 EGP</span>
              <span className="inter-regular old-price mx-3 body-1">
                550 EGP
              </span>
            </div>
            <div className="courses-btns-wrapper">
              <Button
                text={intl.formatMessage({ id: "buyNow" })}
                className="buy-courses-btn inter-semi-bold label-1"
              ></Button>
              <Button
                text={intl.formatMessage({ id: "addtoCart" })}
                className="check-courses-btn inter-semi-bold label-1 mx-3"
              ></Button>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="course-img">
              <img src={playIcon} alt="play-icon"></img>
            </div>
          </div>
        </div>

        <div className="course-second-section">
          <div className="course-data-wrapper my-2">
            <ul className="content-data-ul">
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Overview" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Content" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Lecturers" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Requirments" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Goals" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Certificate" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="Reviews" />
              </li>
              <li className="inter-regular body-1 ">
                <FormattedMessage id="RecommendedCourses" />
              </li>
            </ul>
          </div>
          <div className="course-third-section row">
            <div className="col-sm-8">
              <div className="course-info-section">
                <div className="overview-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Overview" />
                  </p>
                  <p className="inter-normal body-1 inner-sections-color ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Augue mattis velit at libero nulla eu id volutpat. At
                    tincidunt nibh cras gravida pellentesque. Id sit aliquet
                    tortor sit amet, integer nec, nec viverra. Amet, mi
                    imperdiet pellentesque sed aliquam integer purus. Lacinia
                    quam volutpat ultrices cursus feugiat felis. Tempus, sed
                    cursus sed sed vitae pulvinar est morbi. Habitasse nec netus
                    faucibus sociis neque pellentesque faucibus id. Nisl vitae
                    egestas faucibus in velit quis aenean sed egestas.
                  </p>
                </div>
                <div className="content-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Content" />
                  </p>
                  <div className="collapse-container">
                    <hr />
                    <p>
                      <p
                        className="glory-semi-bold heading-1"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Unit 1: Title one
                      </p>
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div>
                        <div className="d-flex justify-content-between mb-2">
                          <div className="body-1 inter-regular lesson-color">
                            Lesson 1 : Lorem Ipsum
                          </div>
                          <div className="body-1 inter-regular time-color">
                            12:45
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <div className="body-1 inter-regular lesson-color">
                            Lesson 1 : Lorem Ipsum
                          </div>
                          <div className="body-1 inter-regular time-color">
                            12:45
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <div className="body-1 inter-regular lesson-color">
                            Lesson 1 : Lorem Ipsum
                          </div>
                          <div className="body-1 inter-regular time-color">
                            12:45
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <div className="body-1 inter-regular lesson-color">
                            Lesson 1 : Lorem Ipsum
                          </div>
                          <div className="body-1 inter-regular time-color">
                            12:45
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <div className="body-1 inter-regular lesson-color">
                            Lesson 1 : Lorem Ipsum
                          </div>
                          <div className="body-1 inter-regular time-color">
                            12:45
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-lecturer-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="AboutLecturers" />
                  </p>

                  <div className="d-flex student-info mb-2">
                    <div>
                      <img src={teacher4} alt="lecturer-img" />
                    </div>
                    <div>
                      <div className="student-name inter-semi-bold body-1">
                        John Doe
                      </div>
                      <div className="student-school label-1 inter-regular">
                        Student at Alexandria Technical School{" "}
                      </div>
                    </div>
                  </div>

                  <p className="inter-normal body-1 inner-sections-color ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Augue mattis velit at libero nulla eu id volutpat. At
                    tincidunt nibh cras gravida pellentesque. Id sit aliquet
                    tortor sit amet, integer nec, nec viverra. Amet, mi
                    imperdiet pellentesque sed aliquam integer purus. Lacinia
                    quam volutpat ultrices cursus feugiat felis. Tempus, sed
                    cursus sed sed vitae pulvinar est morbi. Habitasse nec netus
                    faucibus sociis neque pellentesque faucibus id. Nisl vitae
                    egestas faucibus in velit quis aenean sed egestas.
                  </p>
                </div>

                <div className="requirements-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Requirments" />
                  </p>
                  <ul>
                    <li className="inter-regular body-1 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lacus eu nisl in eget.
                    </li>
                    <li className="inter-regular body-1 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lacus eu nisl in eget.
                    </li>
                    <li className="inter-regular body-1 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lacus eu nisl in eget.
                    </li>
                    <li className="inter-regular body-1 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lacus eu nisl in eget.
                    </li>
                  </ul>
                </div>

                <div className="goals-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Goalsfromthiscourse" />
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <div className="goals-container col-sm-5">
                      <p className="p-2">
                        Learn how to weld a semi conductor board to make
                        different devices
                      </p>
                    </div>

                    <div className="goals-container col-sm-6">
                      <p className="p-2">
                        Learn how to weld a semi conductor board to make
                        different devices
                      </p>
                    </div>

                    <div className="goals-container col-sm-4">
                      <p className="p-2">
                        Learn how to weld a semi conductor board to make
                        different devices
                      </p>
                    </div>
                  </div>
                </div>

                <div className="course-certificate-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Certificate" />
                  </p>
                  <div className="d-flex align-items-center course-detials">
                    <div className="col-sm-5">
                      <img src={certificate2} alt="certificate"></img>
                    </div>
                    <div className="col-sm-7">
                      <p className="inter-semi-bold heading-1 mb-1 certificate-color">
                        <FormattedMessage id="CertificateofCompletion" />
                      </p>
                      <ul className="certificate-ul">
                        <li className="inter-regular body-1 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lacus eu nisl in eget.
                        </li>
                        <li className="inter-regular body-1 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lacus eu nisl in eget.
                        </li>
                        <li className="inter-regular body-1 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lacus eu nisl in eget.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="reviews-section mb-4">
                <p className="glory-bold heading-3">
                    <FormattedMessage id="Reviews" />
                  </p>
                  <div className="d-flex justify-content-between my-4 align-items-baseline">
                    <div>
                    
                      <span><span className="star-item">5 </span> <sub className="inter-normal label-1">of 5</sub></span>
                      <span className="glory-semi-bold heading-1 mx-3">23 review</span>
                      </div>
                    <div>    <Button
                text={intl.formatMessage({ id: "Showallreviews" })}
                className="check-courses-btn show-reviews-btn inter-semi-bold label-1 mx-3"
              ></Button></div>
                     </div>
                 

                  <div class="row gx-2">
                    <div class="col-sm-6">
                      <div class="p-3 border mb-3 goals-container  ">
                        <div className="d-flex student-info mb-2">
                          <div>
                            <img src={teacher4} alt="lecturer-img" />
                          </div>
                          <div>
                            <div className="student-name inter-semi-bold body-1">
                              John Doe
                            </div>
                            <div className="student-school label-1 inter-regular">
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star2}
                                  alt="star"
                                  width="13px"
                                  heigth="13px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, ctetur adipiscing elit. Dis
                        dolor sit ultricies enim pellentesque hac id. Vitae
                        commodo at pulvinar viverra moltie purus. Neque ut a
                        dictum egestas vestibulum lacus, nisl mauris. Dui tortor
                        in et lorem lacus
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="p-3 border mb-3 goals-container ">
                        <div className="d-flex student-info mb-2">
                          <div>
                            <img src={teacher4} alt="lecturer-img" />
                          </div>
                          <div>
                            <div className="student-name inter-semi-bold body-1">
                              John Doe
                            </div>
                            <div className="student-school label-1 inter-regular">
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star2}
                                  alt="star"
                                  width="13px"
                                  heigth="13px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, ctetur adipiscing elit. Dis
                        dolor sit ultricies enim pellentesque hac id. Vitae
                        commodo at pulvinar viverra moltie purus. Neque ut a
                        dictum egestas vestibulum lacus, nisl mauris. Dui tortor
                        in et lorem lacus
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="p-3 border mb-3 goals-container  ">
                        <div className="d-flex student-info mb-2">
                          <div>
                            <img src={teacher4} alt="lecturer-img" />
                          </div>
                          <div>
                            <div className="student-name inter-semi-bold body-1">
                              John Doe
                            </div>
                            <div className="student-school label-1 inter-regular">
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star2}
                                  alt="star"
                                  width="13px"
                                  heigth="13px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, ctetur adipiscing elit. Dis
                        dolor sit ultricies enim pellentesque hac id. Vitae
                        commodo at pulvinar viverra moltie purus. Neque ut a
                        dictum egestas vestibulum lacus, nisl mauris. Dui tortor
                        in et lorem lacus
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="p-3 border mb-3 goals-container  ">
                        <div className="d-flex student-info mb-2">
                          <div>
                            <img src={teacher4} alt="lecturer-img" />
                          </div>
                          <div>
                            <div className="student-name inter-semi-bold body-1">
                              John Doe
                            </div>
                            <div className="student-school label-1 inter-regular">
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star}
                                  alt="star"
                                  width="15px"
                                  heigth="15px"
                                />
                              </span>
                              <span className="align-text-bottom">
                                <img
                                  src={star2}
                                  alt="star"
                                  width="13px"
                                  heigth="13px"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, ctetur adipiscing elit. Dis
                        dolor sit ultricies enim pellentesque hac id. Vitae
                        commodo at pulvinar viverra moltie purus. Neque ut a
                        dictum egestas vestibulum lacus, nisl mauris. Dui tortor
                        in et lorem lacus
                      </div>
                    </div>
                  </div>
                </div>
                <div className="other-courses-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="studentsAttendedCourses" />
                  </p>
                  <div className="d-flex course-results-wrapper mb-5 align-items-center">
                <div className="col-sm-4"><img src={cutMetalImg} alt="course-img"></img></div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-1 mb-0">Cutting metals and how we use the devices</p>
                  <div className="search-results-courses-data mb-1">
                    <span className="inter-regular label-1">Mohammed Karim</span>
                    <span className="inter-regular label-1 search-result-date"> 
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
                    </span>
                    <span className="inter-regular label-1 search-result-students-number">400,150 student</span>
                  </div>
               
                    <div>
                      <span className="inter-semi-bold new-price">200 EGP</span>
                      <span className="inter-regular old-price mx-1">
                        550 EGP
                      </span>
                    </div>
                </div>
              </div>
                </div>

              </div>
            </div>
            <div className="col-sm-4 secondary-course-section">
              <div className="secondary-course-section-wrapper course-info-section">
              <div className="course-img-2 mb-2">
              <img src={playIcon} alt="play-icon"></img>
            </div>
            <p className="heading-1 mb-1  glory-semi-bold">
              Learning semi conductors for electrical
            </p>
            <p className="course-subheader inter-regular  mb-1">
            By: Eng/ Mohammed Yehia
            </p>
            <div className="course-rating-instructor  mb-1">
              <span className="inter-regular label-1">
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star} alt="star" width="15px" heigth="15px" />
                </span>
                <span className="align-text-bottom">
                  <img src={star2} alt="star" width="13px" heigth="13px" />
                </span>
                <span className="top-courses-rating inter-regular label-1 m-x-1">
                  (24)
                </span>
              </span>
              <span className="inter-regular label-1 search-result-date">
              400,150 student
              </span>
            </div>
            <div className="course-rating-instructor languages-difficulty-wrapper  mb-1">
              <span className="inter-regular label-1">
                Mohammed Ka
              </span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-4">
              <span className="inter-semi-bold new-price body-1">200 EGP</span>
              <span className="inter-regular old-price mx-3 body-1">
                550 EGP
              </span>
            </div>
            <div className="w-100">
            <div className="w-100">
            <Button
                text={intl.formatMessage({ id: "buyNow" })}
                className="buy-courses-btn inter-semi-bold label-1 w-100"
              ></Button>
            </div>
            <div  className="w-100">
            <Button
                text={intl.formatMessage({ id: "addtoCart" })}
                className="check-courses-btn inter-semi-bold label-1 my-2 w-100"
              ></Button>
            </div>
            </div>
            </div>

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CoursePage;
