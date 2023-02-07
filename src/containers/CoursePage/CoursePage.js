import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import { Rating } from "react-simple-star-rating";
import certificate2 from "../../assets/imgs/certificate2.png";
import playIcon from "../../assets/imgs/icons/play-circle.png";
import clockIcon from "../../assets/imgs/icons/clock.png";
import starIcon from "../../assets/imgs/icons/star.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import arrowdownIcon from "../../assets/imgs/icons/Vector.png";
import docIcon from "../../assets/imgs/icons/document-text.png";
import videoIcon from "../../assets/imgs/icons/video-circle.png";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseDetails, addToCart } from "../../store/actions/home";
import moment from "moment";
import "./CoursePage.scss";
import EmptyState from "../../components/EmptyStateComponent/EmptyState";

const CoursePage = () => {
  const intl = useIntl();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { home } = useSelector((state) => state);
  const { course_info } = home;

  useEffect(() => {
    id && dispatch(getCourseDetails(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    localStorage.getItem("user-data") && dispatch(addToCart(id));
  };

  return (
    <>
      <div className="course-section-wrapper">
        <div className="d-flex course-first-section">
          <div className="col-sm-7">
            <div className="mb-2 best-seller-section">
              <div className="mobile-section-course">
                <FormattedMessage id="course" />
              </div>
              <div>
                {/* <Button
                  className="best-sellter-btn inter-regular"
                  text={intl.formatMessage({ id: "BestSeller" })}
                ></Button> */}
              </div>
            </div>
            <p className="heading-4  glory-semi-bold w-75">
              {course_info.title}
            </p>
            <p className="course-subheader inter-regular w-75 mb-3">
              {course_info.description}
            </p>
            <div className="course-rating-instructor mb-3">
              <Rating
                readonly={true}
                initialValue={course_info.avgRating}
                allowFraction={true}
              />
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                <sub>({course_info.reviewsNo})</sub>
              </span>
              <span className="inter-regular label-1 search-result-date">
                By:{" "}
                {course_info.instructors?.map(
                  (instructor, i) =>
                    instructor.fullName +
                    `${i < course_info.instructors.length - 1 ? ", " : " "}`
                )}
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                {course_info.studentsNo} Student
              </span>
            </div>
            <div className="course-rating-instructor languages-difficulty-wrapper mb-3">
              <span className="inter-regular label-1">
                Releasing Date: {moment(course_info.releaseDate).format("LL")}
              </span>
              <span className="inter-regular label-1 search-result-date">
                Course language: {course_info.language}
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                {course_info.level}
              </span>
            </div>
            <div className="mb-4">
              <span className="inter-semi-bold new-price">
                {course_info.price} EGP
              </span>
              {/* <span className="inter-regular old-price mx-3 body-1">
                550 EGP
              </span> */}
            </div>
            <div className="courses-btns-wrapper">
              <Button
                text={intl.formatMessage({ id: "buyNow" })}
                className="buy-courses-btn inter-semi-bold label-1"
              ></Button>
              <Button
                text={intl.formatMessage({ id: "addtoCart" })}
                className="check-courses-btn inter-semi-bold label-1 mx-3 btnColor"
                onClick={() => handleAddToCart()}
              ></Button>
            </div>
          </div>
          <div className="col-sm-5">
            <div
              className="course-img cursor-pointer"
              onClick={() => navigate(`/course-details/${id}`)}
              style={{ backgroundImage: `url(${course_info.cover})` }}
            >
              <img src={playIcon} alt="play-icon" />
              <div className="course-duration-badge">
                <img src={clockIcon} alt="duration" />
                <p className="m-0"> {course_info.duration}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="course-second-section">
          <div className="course-data-wrapper my-3">
            <ul className="content-data-ul">
              <li className="inter-regular body-1 ">
                <a href="#overview_section ">
                  <FormattedMessage id="Overview" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#content_section ">
                  <FormattedMessage id="Content" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#lecturers_section ">
                  <FormattedMessage id="Lecturers" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#requirments_section ">
                  <FormattedMessage id="Requirments" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#goals_section ">
                  <FormattedMessage id="Goals" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#certificate_section ">
                  <FormattedMessage id="Certificate" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#reviews_section ">
                  <FormattedMessage id="Reviews" />
                </a>
              </li>
              <li className="inter-regular body-1 ">
                <a href="#recommended_courses_section ">
                  <FormattedMessage id="RecommendedCourses" />
                </a>
              </li>
            </ul>
          </div>
          <div className="course-third-section row">
            <div className="col-sm-8">
              <div className="course-info-section">
                <div className="overview-section mb-4" id="overview_section">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Overview" />
                  </p>
                  <p className="inter-normal body-1 inner-sections-color ">
                    {course_info.description}
                  </p>
                </div>
                <div className="content-section mb-4" id="content_section">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Content" />
                  </p>
                  <hr />
                  {course_info?.sections?.map((course, i) => (
                    <div key={i}>
                      <div>
                        <div
                          className="glory-semi-bold heading-1 course-criculum-title cursor-pointer"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample-${i}`}
                          role="menuitem"
                          aria-controls="collapseExample"
                        >
                          <span style={{ alignSelf: "center" }}>
                            <img
                              src={arrowdownIcon}
                              alt="arrow-down"
                              className="me-2"
                            />
                          </span>
                          <div>
                            <span className="title-text">{course.title}</span>
                          </div>
                        </div>
                      </div>
                      <div className="collapse" id={`collapseExample-${i}`}>
                        <div>
                          {course?.lectures.map((lecture, index) => (
                            <div
                              className="d-flex justify-content-between mb-4 cursor-pointer"
                              key={index}
                            >
                              <div className="body-1 inter-regular lesson-color single-lecture">
                                <span>
                                  <img
                                    src={index % 2 === 0 ? docIcon : videoIcon}
                                    alt="course-icon"
                                  />
                                </span>
                                <span>{lecture.title}</span>
                              </div>
                              <div className="body-1 inter-regular inter-semi-bold time-color">
                                <b>
                                  {lecture.duration}
                                </b>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <div className="collapse-container">
                    <hr />
                    <p>
                      <p
                        className="glory-semi-bold heading-1"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample"
                        role="menuitem"
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
                  </div> */}
                </div>
                <div
                  className="about-lecturer-section mb-4 align-items-start"
                  id="lecturers_section"
                >
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
                          <div className="student-school label-1 inter-regular mb-2">
                            Student at Alexandria Technical School{" "}
                          </div>
                          <p className="inter-normal body-1 inner-sections-color ">
                            {instructor.bio}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="requirements-section mb-4"
                  id="requirments_section"
                >
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

                <div className="goals-section mb-4" id="goals_section">
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

                <div
                  className="course-certificate-section mb-4"
                  id="certificate_section"
                >
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Certificate" />
                  </p>
                  <div className="d-flex align-items-center course-detials">
                    <div className="col-sm-5">
                      <img src={certificate2} alt="certificate"></img>
                    </div>
                    <div className="col-sm-7">
                      <p className="inter-semi-bold heading-1 mb-3 certificate-color">
                        <FormattedMessage id="CertificateofCompletion" />
                      </p>
                      <ul className="certificate-ul p-0">
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

                <div className="reviews-section mb-4" id="reviews_section">
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="Reviews" />
                  </p>
                  <div className="d-flex justify-content-between my-4 align-items-baseline">
                    <div dir="ltr">
                      {/* <div className="single-star"><img src={starIcon} width='30%'/></div> */}
                      <span>
                        <span className="star-item">
                          {course_info.avgRating ?? 0}{" "}
                        </span>
                        <span>
                          <img
                            src={starIcon}
                            style={{ verticalAlign: "top" }}
                            alt="star-icon"
                          />
                        </span>
                        <sub className="inter-normal label-1">of 5</sub>
                      </span>
                      <span className="glory-semi-bold heading-1 mx-3">
                        {course_info.reviewsNo}
                      </span>
                    </div>
                    <div>
                      <Button
                        text={intl.formatMessage({ id: "Showallreviews" })}
                        className="check-courses-btn all-reviews-btn show-reviews-btn inter-semi-bold label-1 mx-3"
                      ></Button>
                    </div>
                  </div>

                  {course_info?.reviews?.length > 0 ? (
                    <div className="row gx-2">
                      {course_info.reviews?.map((review, i) => (
                        <div className="col-sm-6" key={i}>
                          <div className="p-3 mb-3 goals-container">
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
                            {review.comment}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <EmptyState text={<FormattedMessage id="noReviews" />} />
                    </div>
                  )}
                </div>
                <div
                  className="other-courses-section mb-4"
                  id="recommended_courses_section"
                >
                  <p className="glory-bold heading-3">
                    <FormattedMessage id="studentsAttendedCourses" />
                  </p>
                  <div className="row course-results-wrapper mb-5 align-items-center">
                    <div className="col-sm-4">
                      <img src={cutMetalImg} alt="course-img" />
                    </div>
                    <div className="col-sm-8">
                      <p className="inter-semi-bold heading-1 mb-2">
                        Cutting metals and how we use the devices
                      </p>
                      <div className="search-results-courses-data mb-1">
                        <span className="inter-regular label-1">
                          Mohammed Karim
                        </span>
                        <span className="inter-regular label-1 search-result-date">
                          <Rating
                            readonly={true}
                            initialValue={4.5}
                            allowFraction={true}
                          />
                          <span className="top-courses-rating inter-regular label-1 m-x-1">
                            <sub>(24)</sub>
                          </span>
                        </span>
                        <span className="inter-regular label-1 search-result-students-number">
                          400,150 Student
                        </span>
                      </div>
                      <div>
                        <span className="inter-semi-bold new-price">
                          200 EGP
                        </span>
                        {/* <span className="inter-regular old-price mx-1">
                      550 EGP
                    </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 secondary-course-section">
              <div className="secondary-course-section-wrapper course-info-section">
                <div
                  className="course-img-2 mb-2 cursor-pointer"
                  onClick={() => navigate(`/course-details/${id}`)}
                  style={{ backgroundImage: `url(${course_info.cover})` }}
                >
                  <img src={playIcon} alt="play-icon" width={"45%"} />
                  <div
                    className="course-duration-badge"
                    style={{ left: "61%" }}
                  >
                    <img src={clockIcon} alt="duration" />
                    <p className="m-0"> {course_info.duration}</p>
                  </div>
                </div>
                <p className="heading-1 mb-1 glory-semi-bold">
                  {course_info.title}
                </p>
                <p className="course-subheader inter-regular mb-1">
                  By:{" "}
                  {course_info.instructors?.map(
                    (instructor, i) =>
                      instructor.fullName +
                      `${i < course_info.instructors.length - 1 ? ", " : " "}`
                  )}
                </p>
                <div className="course-rating-instructor mb-1">
                  <Rating
                    readonly={true}
                    initialValue={course_info.avgRating}
                    allowFraction={true}
                  />
                  <span className="top-courses-rating inter-regular label-1 m-x-1">
                    <sub>({course_info.reviewsNo})</sub>
                  </span>
                  <span className="inter-regular label-1 search-result-date">
                    {course_info.studentsNo} Student
                  </span>
                </div>
                <div className="course-rating-instructor languages-difficulty-wrapper mb-3">
                  <span className="inter-regular label-1">
                    Releasing Date:{" "}
                    {moment(course_info.releaseDate).format("LL")}
                  </span>
                  <span className="inter-regular label-1 search-result-date">
                    {course_info.language}
                  </span>
                  <span className="inter-regular label-1 search-result-students-number">
                    {course_info.level}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="inter-semi-bold new-price body-1">
                    200 EGP
                  </span>
                  {/*<span className="inter-regular old-price mx-3 body-1">
                550 EGP
              </span>*/}
                </div>
                <div className="w-100">
                  <div className="w-100">
                    <Button
                      text={intl.formatMessage({ id: "buyNow" })}
                      className="buy-courses-btn inter-semi-bold label-1 w-100"
                    ></Button>
                  </div>
                  <div className="w-100">
                    <Button
                      text={intl.formatMessage({ id: "addtoCart" })}
                      className="check-courses-btn inter-semi-bold label-1 my-2 w-100"
                      onClick={() => handleAddToCart()}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
