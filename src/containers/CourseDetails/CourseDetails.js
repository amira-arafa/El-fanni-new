import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../components/Button/Button";
import teacher4 from "../../assets/imgs/teacher4.png";
import Header2 from "../../components/Layout/Header2";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import star from "../../assets/imgs/icons/star.png";
import arrowdownIcon from "../../assets/imgs/icons/arrow-down.png";
import closeCircleIcon from "../../assets/imgs/icons/close-circle.png";
import moreIconVertical from "../../assets/imgs/icons/more.png";
// import taskSquareIcon from "../../assets/imgs/icons/task-square.png";
import docIcon from "../../assets/imgs/icons/document-text.png";
import videoIcon from "../../assets/imgs/icons/video-circle.png";
import star2 from "../../assets/imgs/icons/vector.png";
import certificate2 from "../../assets/imgs/certificate2.png";
import { Rating } from "react-simple-star-rating";
import downloadIcon from "../../assets/imgs/icons/document-download.png";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import searchIcon from "../../assets/imgs/icons/search-normal.png";
import importIcon from "../../assets/imgs/icons/import.png";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCourseDetails } from "../../store/actions/home";
import EmptyState from "../../components/EmptyStateComponent/EmptyState";
import "./CourseDetails.scss";
import Input from "../../components/Input/Input";
import search from "../../assets/imgs/icons/search-normal.png";
import sortIcon from "../../assets/imgs/icons/sort.png";

const CourseDetails = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const { home } = useSelector((state) => state);
  const { course_info } = home;
  const [courseUrl, setCourseUrl] = useState(null);
  const [reviewSearchValue, setReviewSearchValue] = useState("");

  useEffect(() => {
    id && dispatch(getCourseDetails(id));
  }, [id]);

  useEffect(() => {
    if (!courseUrl && Object.keys(course_info).length > 0) {
      // setCourseUrl(course_info.sections[0]?.lectures[0].path)
      setCourseUrl("https://alfanni-staging.s3.eu-central-1.amazonaws.com/demo/lecture-demo.mp4")
    }
  }, [course_info]);

  return (
    <div className="course-details-wrapper">
      <div className="desktop-view">
        <Header2></Header2>
        <div className="d-flex course-details-parent">
          <div className="col-sm-4">
            <div className="course-ciriculum p-4">
              <div className="collapse-container">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Content" />
                  <span><img src={closeCircleIcon} alt="close"/></span>
                </p>

                <hr />

                {course_info?.sections?.map((course, i) => (
                  <div>
                    <p>
                      <p
                        className="glory-semi-bold heading-1 course-criculum-title cursor-pointer"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseExample-${i}`}
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div>
                          <span className="title-text">{course.title}</span>
                          <p className="title-info"><span>0 of 5 completed</span><span>1 hr, 30 min</span></p>
                        </div>
                        <span style={{alignSelf: 'center'}}><img src={arrowdownIcon} alt="arrow-down"/></span>
                      </p>
                    </p>
                    <div className="collapse" id={`collapseExample-${i}`}>
                      <div>
                        {course?.lectures.map((lecture, index) => (
                          <div className="d-flex justify-content-between mb-4 cursor-pointer" onClick={() => {
                            document.querySelector('#mainVideo').src = "https://alfanni-staging.s3.eu-central-1.amazonaws.com/demo/lecture-demo.mp4";
                            document.querySelector('#mobileVideo').src = "https://alfanni-staging.s3.eu-central-1.amazonaws.com/demo/lecture-demo.mp4"
                          }}>
                            <div className="body-1 inter-regular lesson-color single-lecture">
                              <span><img src={index % 2 == 0 ? docIcon : videoIcon}/></span>
                              <span>{lecture.title}</span>
                            </div>
                            <div className="body-1 inter-regular inter-semi-bold time-color">
                            <b>{Math.floor((Math.random() * 10) + 1) + ':' + Math.floor((Math.random() * 60) + 1)}</b>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            {courseUrl && <video
              id="mainVideo"
              className="main"
              controls
              preload
              width="100%"
            >
              <source
                src={courseUrl}
              // type="video/mp4"
              />
            </video>}

            <div className="course-data-wrapper my-3">
              <ul className="content-data-ul">
                <li className={`"inter-regular body-1" ${activeTab === 0 && "li-active"}`}
                  onClick={() => {
                    setActiveTab(0);
                  }}
                >
                  <FormattedMessage id="Overview" />
                  <div ></div>
                </li>
                <li
                  className={`"inter-regular body-1" ${activeTab === 1 && "li-active"}`}
                  onClick={() => {
                    setActiveTab(1);
                  }}
                >
                  <FormattedMessage id="Rating" />
                <div ></div>
                </li>
                <li
                  className={`"inter-regular body-1" ${activeTab === 2 && "li-active"}`}
                  onClick={() => {
                    setActiveTab(2);
                  }}
                >
                  <FormattedMessage id="Certification" />
                  <div ></div>
                </li>
                <li
                  className={`"inter-regular body-1" ${activeTab === 3 && "li-active"}`}
                  onClick={() => {
                    setActiveTab(3);
                  }}
                >
                  <FormattedMessage id="Attachments" />
                  <div ></div>
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
                    {course_info.description}
                  </p>
                </div>

                <div className="about-lecturer-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="AboutLecturers" />
                  </p>

                  {course_info.instructors?.map((instructor) => (
                    <div>
                      <div className="d-flex student-info mb-2">
                        <div>
                          <img src={instructor.photo} alt="lecturer-img" />
                        </div>
                        <div>
                          <div className="student-name inter-semi-bold body-1">
                            {instructor.fullName}
                          </div>
                          <div className="student-school label-1 inter-regular">
                            Student at Alexandria Technical School{" "}
                          </div>
                        </div>
                      </div>

                      <p className="inter-normal body-1 inner-sections-color ">
                        {instructor.bio}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="requirements-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Requirments" />
                  </p>
                  <ul>
                    {course_info.requirements?.map((requirement) => (
                      <li className="inter-regular body-1 mb-2">
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="goals-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Goalsfromthiscourse" />
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    {course_info.goals?.map((goal) => (
                      <div className="goals-container col-sm-5">
                        <p className="p-2">{goal}</p>
                      </div>
                    ))}
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
                    <FormattedMessage id="ratingAndreviews" />
                  </p>
                  <div className="d-flex justify-content-between my-4 align-items-baseline">
                    <div>
                      <span>
                        <span className="star-item">{course_info.avgRating ?? 0} </span>
                        <sub className="inter-normal label-1">of 5</sub>
                      </span>
                      <span className="glory-semi-bold heading-1 mx-3">
                      {course_info.reviewsNo} review
                      </span>
                    </div>
                  </div>

                  <div className="reviews-search-wrapper mb-4 row">
                   <div className="col-sm-10">
                   <Input
                    type="text"
                    className="reviews-search-input"
                    value={reviewSearchValue}
                    onChange={(e) => setReviewSearchValue(e.target.value)}
                    placeholder={intl.formatMessage({ id: "searchHere" })}
                    onKeyPress={(event) => {
                      // if (event.key === "Enter") redirectTosearchPage()
                    }}
                    icon={
                      <img
                        alt="search-icon"
                        src={searchIcon}
                        width="20"
                        height="20"
                        className="cursor-pointer"
                        // onClick={() => redirectTosearchPage()}
                      />
                    }
                  />
                    </div>
                 <div className="col-sm-2">
                 <Button
                    className="sort-btn inter-semi-bold label-1"
                    text={intl.formatMessage({ id: "sortBy" })}
                    icon={sortIcon}
                  ></Button>
                  </div>
                  </div>

                  <div className="row gx-2">
                    {course_info.reviews?.map((review) => (<div className="col-sm-12">
                      <div className="p-3 mb-3 ">
                        <div className="d-flex student-info mb-2">
                          <div>
                            <img src={review.users[0]?.photo} alt="lecturer-img" />
                          </div>
                          <div>
                            <div className="student-name inter-semi-bold body-1">
                              {review.users[0]?.fullName}
                            </div>
                            <div className="student-school label-1 inter-regular">
                              <Rating
                                readonly={true}
                                initialValue={review.rate}
                                allowFraction={true}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="offset-sm-1 col-sm-11">
                            {review.comment}
                          </div>
                        </div>
                      </div>
                    </div>))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="over-view-wrapper">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Attachments" />
                </p>

                { course_info?.attachments?.length>0 ?<ul className="attachment-ul">
                  { course_info?.attachments?.length>0 && course_info.attachments.map((attach, i)=> (
                  <li className="inter-regular body-1 mb-2 cursor-pointer"><img src={importIcon} alt="download" className="me-2"/><a href={attach} >Attachment {i+1}</a></li>
                ))}
                </ul> : <EmptyState text={<FormattedMessage id="noAttachments"/>}/>}
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
            <img src={moreIconVertical} alt="more" width="40px" heigth="40px"></img>
          </div>
        </div>

        <div className="dropdown ddp-btn p-4">
          <button
            className="btn btn-secondary dropdown-toggle w-100 course-content-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FormattedMessage id="CourseContent" />
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <video
          id="mobileVideo"
          className="main mb-3"
          controls
          preload
          width="100%"
        >
          <source
            src={courseUrl}
            // type="video/mp4"
          />
        </video>

        <div className="about-lecturer-section mb-4">
          <p className="glory-bold heading-3">
            <FormattedMessage id="AboutLecturers" />
          </p>

          {course_info.instructors?.map((instructor) => (
            <div>
              <div className="d-flex student-info mb-2">
                <div>
                  <img src={instructor.photo} alt="lecturer-img" />
                </div>
                <div>
                  <div className="student-name inter-semi-bold body-1">
                    {instructor.fullName}
                  </div>
                  <div className="student-school label-1 inter-regular">
                    Student at Alexandria Technical School{" "}
                  </div>
                </div>
              </div>

              <p className="inter-normal body-1 inner-sections-color ">
                {instructor.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="over-view-wrapper">
          <p className="glory-bold heading-3">
            <FormattedMessage id="Attachments" />
          </p>

          <ul className="attachment-ul">
            {course_info?.attachments?.length > 0 && course_info.attachments.map((attach, i) => (
              <li className="inter-regular body-1 mb-2">Attachment {i + 1}</li>
            ))}
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CourseDetails;
