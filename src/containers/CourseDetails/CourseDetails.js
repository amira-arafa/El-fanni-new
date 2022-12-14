import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../components/Button/Button";
import teacher4 from "../../assets/imgs/teacher4.png";
import Header2 from "../../components/Layout/Header2";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import star from "../../assets/imgs/icons/star.png";
import star2 from "../../assets/imgs/icons/vector.png";
import certificate2 from "../../assets/imgs/certificate2.png";
import downloadIcon from "../../assets/imgs/icons/document-download.png";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import "./CourseDetails.scss";

const CourseDetails = () => {
  const intl = useIntl();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="course-details-wrapper">
      <div className="desktop-view">
        <Header2></Header2>
        <div className="d-flex">
          <div className="col-sm-4">
            <div className="course-ciriculum p-3">
              <div className="collapse-container">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Content" />
                </p>
                <hr />
                <p>
                  <p
                    className="glory-semi-bold heading-1 course-criculum-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Unit 1: Intro to 3D Max tools
                  </p>
                </p>
                <div className="collapse" id="collapseExample">
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <div className="body-1 inter-regular lesson-color">
                        Lesson 1: How 3D Max tools work
                      </div>
                      <div className="body-1 inter-regular inter-semi-bold time-color">
                        12:45
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <div className="body-1 inter-regular lesson-color">
                        Lesson 1: How 3D Max tools work
                      </div>
                      <div className="body-1 inter-regular time-color inter-semi-bold">
                        12:45
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <div className="body-1 inter-regular lesson-color">
                        Lesson 1: How 3D Max tools work
                      </div>
                      <div className="body-1 inter-regular time-color inter-semi-bold">
                        12:45
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <div className="body-1 inter-regular lesson-color">
                        Lesson 1: How 3D Max tools work
                      </div>
                      <div className="body-1 inter-semi-bold time-color inter-semi-bold">
                        12:45
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <div className="body-1 inter-regular lesson-color">
                        Lesson 1: How 3D Max tools work
                      </div>
                      <div className="body-1 inter-regular time-color inter-semi-bold">
                        12:45
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <video id="mainVideo" className="main" controls preload width="100%">
              <source
                src="https://raw.githubusercontent.com/rizz-wan/utils/main/ambience/6.mp4"
                type="video/mp4"
              />
            </video>

            <div className="course-data-wrapper my-2">
              <ul className="content-data-ul">
                <li
                  className={`"inter-regular body-1" ${
                    activeTab === 0 && "li-active"
                  }`}
                  onClick={() => {
                    setActiveTab(0);
                  }}
                >
                  <FormattedMessage id="Overview" />
                </li>
                <li
                  className={`"inter-regular body-1" ${
                    activeTab === 1 && "li-active"
                  }`}
                  onClick={() => {
                    setActiveTab(1);
                  }}
                >
                  <FormattedMessage id="Rating" />
                </li>
                <li
                  className={`"inter-regular body-1" ${
                    activeTab === 2 && "li-active"
                  }`}
                  onClick={() => {
                    setActiveTab(2);
                  }}
                >
                  <FormattedMessage id="Certification" />
                </li>
                <li
                  className={`"inter-regular body-1" ${
                    activeTab === 3 && "li-active"
                  }`}
                  onClick={() => {
                    setActiveTab(3);
                  }}
                >
                  <FormattedMessage id="Attachments" />
                </li>
              </ul>
            </div>

            {activeTab === 0 && (
              <div className="over-view-wrapper">
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
              </div>
            )}

            {activeTab === 2 && (
              <div className="over-view-wrapper">
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
                <Button
                  icon={downloadIcon}
                  text={intl.formatMessage({ id: "DownloadCertificate" })}
                  className="buy-courses-btn inter-semi-bold label-1"
                ></Button>
              </div>
            )}

            {activeTab == 1 && (
              <div className="over-view-wrapper">
                <div className="reviews-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Reviews" />
                  </p>
                  <div className="d-flex justify-content-between my-4 align-items-baseline">
                    <div>
                      <span>
                        <span className="star-item">5 </span>{" "}
                        <sub className="inter-normal label-1">of 5</sub>
                      </span>
                      <span className="glory-semi-bold heading-1 mx-3">
                        23 review
                      </span>
                    </div>
                  </div>

                  <div class="row gx-2">
                    <div class="col-sm-12">
                      <div class="p-3 mb-3 ">
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
                        <div className="row">
                          <div className="offset-sm-1 col-sm-11">
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit.
                            Dis dolor sit ultricies enim pellentesque hac id.
                            Vitae commodo at pulvinar viverra moltie purus.
                            Neque ut a dictum egestas vestibulum lacus, nisl
                            mauris. Dui tortor in et lorem lacus
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="p-3 mb-3">
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
                        <div className="row">
                          <div className="offset-sm-1 col-sm-11">
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit.
                            Dis dolor sit ultricies enim pellentesque hac id.
                            Vitae commodo at pulvinar viverra moltie purus.
                            Neque ut a dictum egestas vestibulum lacus, nisl
                            mauris. Dui tortor in et lorem lacus
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="p-3 mb-3">
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
                        <div className="row">
                          <div className="offset-sm-1 col-sm-11">
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit.
                            Dis dolor sit ultricies enim pellentesque hac id.
                            Vitae commodo at pulvinar viverra moltie purus.
                            Neque ut a dictum egestas vestibulum lacus, nisl
                            mauris. Dui tortor in et lorem lacus
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="p-3 mb-3">
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
                        <div className="row">
                          <div className="offset-sm-1 col-sm-11">
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit.
                            Dis dolor sit ultricies enim pellentesque hac id.
                            Vitae commodo at pulvinar viverra moltie purus.
                            Neque ut a dictum egestas vestibulum lacus, nisl
                            mauris. Dui tortor in et lorem lacus
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="over-view-wrapper">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Attachments" />
                </p>

                <ul className="attachment-ul">
                  <li className="inter-regular body-1 mb-2">Attachment 1</li>
                  <li className="inter-regular body-1 mb-2">Attachment 2</li>
                  <li className="inter-regular body-1 mb-2">Attachment 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <Footer></Footer>
      </div>

      <div className="mobile-view">
        <Header></Header>
        <div className="d-flex course-name-wrapper justify-content-between align-items-center">
          <div className="col-sm-10">
            <p className="inter-semi-bold course-header-title">
              Introduction to 3D drawing and piping using 3D Max
            </p>
          </div>
          <div className="col-sm-2">
            <img src={moreIcon} alt="more" width="40px" heigth="40px"></img>
          </div>
        </div>
          
        <div className="dropdown ddp-btn p-4">
  <button className="btn btn-secondary dropdown-toggle w-100 course-content-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <FormattedMessage id="CourseContent"/>
  </button>
  <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<video id="mainVideo" className="main mb-3" controls preload width="100%">
              <source
                src="https://raw.githubusercontent.com/rizz-wan/utils/main/ambience/6.mp4"
                type="video/mp4"
              />
            </video>

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

                <div className="over-view-wrapper">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Attachments" />
                </p>

                <ul className="attachment-ul">
                  <li className="inter-regular body-1 mb-2">Attachment 1</li>
                  <li className="inter-regular body-1 mb-2">Attachment 2</li>
                  <li className="inter-regular body-1 mb-2">Attachment 3</li>
                </ul>
              </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CourseDetails;
