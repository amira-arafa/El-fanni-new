import React, { useState, useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../components/Button/Button";
import Header2 from "../../components/Layout/Header2";
import Header from "../../components/Layout/Header";
import arrowdownIcon from "../../assets/imgs/icons/arrow-down.png";
import closeCircleIcon from "../../assets/imgs/icons/close-circle.png";
import moregreyIcon from "../../assets/imgs/icons/moregrey.png";
import docIcon from "../../assets/imgs/icons/document-text.png";
import videoIcon from "../../assets/imgs/icons/video-circle.png";
import certificate2 from "../../assets/imgs/certificate2.png";
import { Rating } from "react-simple-star-rating";
import downloadIcon from "../../assets/imgs/icons/document-download.png";
import searchIcon from "../../assets/imgs/icons/search-normal.png";
import importIcon from "../../assets/imgs/icons/import.png";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { getCourseDetails } from "../../store/actions/home";
import EmptyState from "../../components/EmptyStateComponent/EmptyState";
import arrowLogo from "../../assets/imgs/icons/arrow-right-white.png";
import "./CourseDetails.scss";
import Input from "../../components/Input/Input";
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
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    id && dispatch(getCourseDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (!courseUrl && Object.keys(course_info).length > 0) {
      setCourseUrl(course_info.sections[0]?.lectures[0].path);
      // setCourseUrl(
      //   "https://alfanni-staging.s3.eu-central-1.amazonaws.com/demo/lecture-demo.mp4"
      // );
    }
  }, [course_info, courseUrl]);

  const handleExpandSection = () => {
    setIsExpanded(false);
  };

  return (
    <div className="course-details-wrapper">
      <div className="desktop-view">
        <Header2></Header2>
        <div className="d-flex course-details-parent">
          <div className={isExpanded ? "col-sm-4" : "d-none"}>
            <div className="course-ciriculum p-4">
              <div className="collapse-container">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Content" />
                  {isExpanded && (
                    <span>
                      <img
                        src={closeCircleIcon}
                        onClick={handleExpandSection}
                        alt="close"
                        className="cursor-pointer"
                      />
                    </span>
                  )}
                </p>

                <hr />

                {course_info?.sections?.map((course, i) => (
                  <div key={i}>
                    <p>
                      <p
                        className="glory-semi-bold heading-1 course-criculum-title cursor-pointer"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseExample-${i}`}
                        role="menuitem"
                        aria-controls="collapseExample"
                      >
                        <div>
                          <span className="title-text">{course.title}</span>
                          <p className="title-info">
                            <span>0 of 5 completed</span>
                            <span>{course.duration}</span>
                          </p>
                        </div>
                        <span style={{ alignSelf: "center" }}>
                          <img src={arrowdownIcon} alt="arrow-down" />
                        </span>
                      </p>
                    </p>
                    <div className="collapse" id={`collapseExample-${i}`}>
                      <div>
                        {course?.lectures.map((lecture, index) => (
                          <div
                            key={index}
                            className="d-flex justify-content-between mb-4 cursor-pointer"
                            onClick={() => {
                              // document.querySelector("#mainVideo").src =
                              //   "https://alfanni-staging.s3.eu-central-1.amazonaws.com/courses/63d56ea041747da10cf50990/sections/63d56ec2605f16c60feb229f/lectures/video-1675710264103.mp4";
                              // document.querySelector("#mobileVideo").src =
                              //   "https://alfanni-staging.s3.eu-central-1.amazonaws.com/demo/lecture-demo.mp4";
                              //   document.querySelector("#mainVideo").src = lecture.path;
                              // document.querySelector("#mobileVideo").src = lecture.path ;
                              setCourseUrl(lecture.path);
                            }}
                          >
                            <div className="body-1 inter-regular lesson-color single-lecture">
                              <span>
                                <img
                                  src={index % 2 === 0 ? docIcon : videoIcon}
                                  alt="video-icon"
                                />
                              </span>
                              <span>{lecture.title}</span>
                            </div>
                            <div className="body-1 inter-regular inter-semi-bold time-color">
                              <b>{lecture.duration}</b>
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
          <div className={isExpanded ? "col-sm-8" : "col-sm-12"}>
            {/* {courseUrl && (
              <video
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
              </video>
            )} */}
            {!isExpanded && (
              <img
                src={arrowLogo}
                onClick={() => setIsExpanded(true)}
                alt="course-arrow"
                className="cursor-pointer"
              ></img>
            )}
            {courseUrl && (
              <ReactPlayer
                id="mainVideo"
                config={{
                  file: {
                    attributes: {
                      autoPlay: true,
                      controlsList: "nodownload",
                    },
                  },
                }}
                url={courseUrl}
                volume={1}
                loop={false}
                width="100%"
                onReady={() => console.log("ready now")}
                controls={true}
              />
            )}

            <div className="course-data-wrapper my-3">
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
                  <div></div>
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
                  <div></div>
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
                  <div></div>
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
                  <div></div>
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

                  {course_info.instructors?.map((instructor, i) => (
                    <div key={i}>
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
                    {course_info.requirements?.map((requirement, i) => (
                      <li className="inter-regular body-1 mb-2" key={i}>
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
                    {course_info.goals?.map((goal, i) => (
                      <div className="goals-container col-sm-5" key={i}>
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

            {activeTab === 1 && (
              <div className="over-view-wrapper">
                <div className="reviews-section mb-4">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="ratingAndreviews" />
                  </p>
                  <div className="d-flex justify-content-between my-4 align-items-baseline">
                    <div dir="ltr">
                      <span>
                        <span className="star-item">
                          {course_info.avgRating ?? 0}{" "}
                        </span>
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
                    {course_info.reviews?.map((review, i) => (
                      <div className="col-sm-12" key={i}>
                        <div className="p-3 mb-3 ">
                          <div className="d-flex student-info mb-2">
                            <div>
                              <img
                                src={review.users[0]?.photo}
                                alt="lecturer-img"
                              />
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="over-view-wrapper">
                <p className="glory-bold heading-3">
                  <FormattedMessage id="Attachments" />
                </p>

                {course_info?.attachments?.length > 0 ? (
                  <ul className="attachment-ul">
                    {course_info?.attachments?.length > 0 &&
                      course_info.attachments.map((attach, i) => (
                        <li className="inter-regular body-1 mb-2 cursor-pointer">
                          <img
                            src={importIcon}
                            key={i}
                            alt="download"
                            className={
                              localStorage.getItem("lang") === "ar"
                                ? "ms-2"
                                : "me-2"
                            }
                          />
                          <a href={attach}>Attachment {i + 1}</a>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <EmptyState text={<FormattedMessage id="noAttachments" />} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mobile-view">
        <Header></Header>
        <div className="d-flex course-name-wrapper justify-content-between align-items-center">
          <div className="col-sm-10">
            <p className="inter-semi-bold course-header-title">
              {course_info.title}
            </p>
          </div>
          <div className="col-sm-2">
            <img src={moregreyIcon} alt="more" width="40px" heigth="40px"></img>
          </div>
        </div>

        <div className="course-ciriculum p-4">
          <div className="collapse-container">
            <p className="glory-bold heading-3">
              <FormattedMessage id="Content" />
              {/* <span>
                <img src={closeCircleIcon} alt="close" />
              </span> */}
            </p>

            <hr />

            {course_info?.sections?.map((course, i) => (
              <div key={i}>
                <p>
                  <p
                    className="glory-semi-bold heading-1 course-criculum-title cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseExample-${i}`}
                    role="menuitem"
                    aria-controls="collapseExample"
                  >
                    <div>
                      <span className="title-text">{course.title}</span>
                      <p className="title-info">
                        <span>0 of 5 completed</span>
                        <span>{course.duration}</span>
                      </p>
                    </div>
                    <span style={{ alignSelf: "center" }}>
                      <img src={arrowdownIcon} alt="arrow-down" />
                    </span>
                  </p>
                </p>
                <div className="collapse" id={`collapseExample-${i}`}>
                  <div>
                    {course?.lectures.map((lecture, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between mb-4 cursor-pointer"
                        onClick={() => {
                          // document.querySelector("#mainVideo").src = lecture.path;
                          // document.querySelector("#mobileVideo").src = lecture.path;
                          setCourseUrl(lecture.path);
                        }}
                      >
                        <div className="body-1 inter-regular lesson-color single-lecture">
                          <span>
                            <img
                              src={index % 2 === 0 ? docIcon : videoIcon}
                              alt="video-icon"
                            />
                          </span>
                          <span>{lecture.title}</span>
                        </div>
                        <div className="body-1 inter-regular inter-semi-bold time-color">
                          <b>
                            {Math.floor(Math.random() * 10 + 1) +
                              ":" +
                              Math.floor(Math.random() * 60 + 1)}
                          </b>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="dropdown ddp-btn menu-content-mobile p-4">
          <button
            className="btn btn-secondary dropdown-toggle w-100 course-content-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            role="menuitem"
          >
            <FormattedMessage id="CourseContent" />
          </button>
          <ul
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <span className="dropdown-item">Action</span>
            </li>
            <li>
              <span className="dropdown-item">Another action</span>
            </li>
            <li>
              <span className="dropdown-item">Something else here</span>
            </li>
          </ul>
        </div> */}
        {/* {courseUrl && (
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
        )} */}
        {courseUrl && (
          <ReactPlayer
            id="mobileVideo"
            config={{
              file: {
                attributes: {
                  autoPlay: false,
                  controlsList: "nodownload",
                },
              },
            }}
            url={courseUrl}
            volume={1}
            loop={false}
            width="100%"
            onReady={() => console.log("ready now")}
            controls={true}
          />
        )}

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

          {course_info?.attachments?.length > 0 ? (
            <ul className="attachment-ul">
              {course_info?.attachments?.length > 0 &&
                course_info.attachments.map((attach, i) => (
                  <li className="inter-regular body-1 mb-2 cursor-pointer">
                    <img
                      src={importIcon}
                      key={i}
                      alt="download"
                      className={
                        localStorage.getItem("lang") === "ar" ? "ms-2" : "me-2"
                      }
                    />
                    <a href={attach}>Attachment {i + 1}</a>
                  </li>
                ))}
            </ul>
          ) : (
            <EmptyState text={<FormattedMessage id="noAttachments" />} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
