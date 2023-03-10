import React, { useState, useEffect } from "react";
import addIcon from "../../assets/imgs/icons/add.png";
import editUser from "../../assets/imgs/icons/user-edit.png";
import Button from "../../components/Button/Button";
import moment from "moment";
import { Rating } from "react-simple-star-rating";
import Input from "../../components/Input/Input";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import sortUp from "../../assets/imgs/icons/direct-up.png";
import sortDown from "../../assets/imgs/icons/direct-down.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import blankImg from "../../assets/imgs/blankImg.webp";
import {
  getProfile,
  getFavourites,
  getCollectionsList,
  addNewCollection,
  removeFromFaviorites,
  getMycoursesList,
} from "../../store/actions/home";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "../../components/Modal/Modal";
import EmptyState from "../../components/EmptyStateComponent/EmptyState";
import "./Profile.scss";

const Profile = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [firstName, setFirstName] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [sort, setSort] = useState(1);
  const [lastName, setLastName] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const { home } = useSelector((state) => state);
  const { profile_info, collections_list, favourites_list, my_courses_list } =
    home;

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (activeTab === 1) {
      dispatch(getFavourites({ sort: { title: sort } }));
    } else if (activeTab === 2) {
      dispatch(getCollectionsList({ sort: sort === 1 ? "name" : "-name" }));
    } else if (activeTab === 0) {
      dispatch(getMycoursesList({ sort: { title: sort } }));
    }
  }, [activeTab, dispatch, sort]);

  useEffect(() => {
    if (profile_info) {
      setFirstName(profile_info.firstName);
      setLastName(profile_info.lastName);
      setEmail(profile_info.email);
      setPhoto(profile_info.photo);
      profile_info.phone && setPhone(profile_info.phone);
    }
  }, [profile_info]);

  const handleSortBy = (sort) => {
    setSort(sort);
    if (activeTab === 1) {
      dispatch(getFavourites({ sort: { title: sort } }));
    } else if (activeTab === 2) {
      dispatch(getCollectionsList({ sort: sort === 1 ? "name" : "-name" }));
    } else if (activeTab === 0) {
      dispatch(getMycoursesList({ sort: { title: sort } }));
    }
  };

  const handleRemoveFromFavourites = (id) => {
    dispatch(removeFromFaviorites(id));
  };

  return (
    <>
      <div className="profile-page-wrapper">
        <div className="profile-tabs-wrapper">
          <div className="profile-page">
            {Object.keys(profile_info).length > 0 && (
              <div className="profile-info row">
                <div className="col-sm-6 text-center-mobile">
                  <div className="row align-items-center">
                    <div className="col-sm-3">
                      <img src={photo} alt="profile-img" />
                    </div>
                    <div className="col-sm-9">
                      <p className="mb-1 heading-3 glory-semi-bold profile-name">
                        {firstName + " " + lastName}
                      </p>
                      <Button
                        icon={editUser}
                        text={intl.formatMessage({ id: "editYourProfile" })}
                        className="check-courses-btn inter-semi-bold label-1"
                        onClick={() => {
                          navigate("/profile-edit");
                        }}
                      ></Button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 mobile-email-wrapper">
                  <p className="label-1 inter-semi-bold mb-0">
                    <FormattedMessage id="Email" />
                  </p>
                  <p className="label-1 inter-regular">{email}</p>
                  <p className="label-1 inter-semi-bold mb-0">
                    <FormattedMessage id="courseInProgress" />
                  </p>
                  <p className="profile-courses-number glory-semi-bold heading">
                    4
                  </p>
                </div>
                <div className="col-sm-3 mobile-email-wrapper">
                  <p className="label-1 inter-semi-bold mb-0">
                    <FormattedMessage id="Phone" />
                  </p>
                  <p className="label-1 inter-regular">{phone}</p>
                  <p className="label-1 inter-semi-bold mb-0">
                    <FormattedMessage id="Coursecompleted" />
                  </p>
                  <p className="profile-courses-number glory-semi-bold heading">
                    15
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="d-flex tabs text-center mb-5">
            <div
              className={`${
                activeTab === 0 && "tab-active"
              } col-sm-4 tab inter-regular cursor-pointer`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              <FormattedMessage id="myCourses" />
            </div>
            <div
              className={`${
                activeTab === 1 && "tab-active"
              } col-sm-4 tab inter-regular cursor-pointer`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              <FormattedMessage id="savedCourses" />
            </div>
            <div
              className={`${
                activeTab === 2 && "tab-active"
              } col-sm-4 tab inter-regular cursor-pointer`}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              <FormattedMessage id="Collections" />
            </div>
          </div>
          <div className="d-flex justify-content-end sort-icon-wrapper align-items-center">
            {activeTab === 2 && (
              <div>
                <ModalComponent
                  open={open}
                  onOpenModal={onOpenModal}
                  onCloseModal={onCloseModal}
                  className="collection-add-modal"
                  children={
                    <Button
                      icon={addIcon}
                      text={intl.formatMessage({ id: "addNewCollection" })}
                      className="w-100 regular-btn inter-semi-bold body-1"
                    />
                  }
                  modalBody={
                    <div>
                      <div>
                        <p className="heading-3  glory-semi-bold btnColor w-50 m-auto mb-3">
                          {" "}
                          <FormattedMessage id="addNewCollection" />
                        </p>

                        <div className="mb-5">
                          <Input
                            label={<FormattedMessage id="collectionName" />}
                            type="text"
                            className="collection-add-modal-input"
                            value={collectionName}
                            onChange={(e) => setCollectionName(e.target.value)}
                            placeholder={"Ex: my collection"}
                          />
                        </div>
                        <div>
                          {" "}
                          <Button
                            className="add-collection-btn inter-semi-bold label-1 d-flex"
                            text={intl.formatMessage({ id: "Add" })}
                            onClick={() => {
                              collectionName &&
                                dispatch(addNewCollection(collectionName));
                              onCloseModal();
                            }}
                          ></Button>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            )}
            <div>
              <div className="sort-arrows mx-3">
                <img
                  src={sortUp}
                  alt="sort-up"
                  width="24px"
                  height="24px"
                  onClick={() => handleSortBy(1)}
                  className="cursor-pointer"
                ></img>
                <img
                  onClick={() => handleSortBy(-1)}
                  src={sortDown}
                  alt="sort-down"
                  width="24px"
                  height="24px"
                  className="cursor-pointer"
                ></img>
              </div>
            </div>

            <div className="dropdown ddp-btn ">
              <div
                className="dropdown-toggle w-100 course-content-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                role="menuitem"
              >
                <Button
                  className="sort-btn inter-semi-bold label-1"
                  text={intl.formatMessage({ id: "sortBy" })}
                  icon={sortIcon}
                ></Button>
              </div>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li onClick={() => handleSortBy(1)} className="cursor-pointer">
                  <span className="dropdown-item">
                    <FormattedMessage id="asc" />
                  </span>
                </li>
                <li onClick={() => handleSortBy(-1)} className="cursor-pointer">
                  <span className="dropdown-item">
                    <FormattedMessage id="dsc" />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {activeTab === 1 && (
            <div>
              {favourites_list.length > 0 ? (
                <div>
                  {favourites_list?.map((course, i) => (
                    <div
                      className="row course-results-wrapper mb-3 mx-0"
                      key={i}
                    >
                      <div
                        className="col-sm-4 cursor-pointer"
                        onClick={() =>
                          navigate(`/course-details/${course._id}`)
                        }
                      >
                        <img
                          src={course.cover}
                          alt="course-img"
                          width="100%"
                        ></img>
                      </div>
                      <div
                        className="col-sm-6 cursor-pointer"
                        onClick={() =>
                          navigate(`/course-details/${course._id}`)
                        }
                      >
                        <p className="inter-semi-bold heading-3 course-title-mobile">
                          {course.title}
                        </p>
                        <div className="search-results-courses-data">
                          <span className="inter-regular label-1">
                            {course.instructors?.map(
                              (instructor, i) =>
                                instructor.fullName +
                                `${
                                  i < course.instructors.length - 1 ? ", " : " "
                                }`
                            )}
                          </span>
                          <span className="inter-regular label-1 search-result-date">
                            {moment(course.releaseDate).format("LL")}
                          </span>
                          <span className="inter-regular label-1 search-result-students-number">
                            {course.studentsNo}
                          </span>
                        </div>
                        <div className="mb-3 search-results-courses-data">
                          <Rating
                            readonly={true}
                            initialValue={course.avgRating}
                            allowFraction={true}
                          />
                          <span className="top-courses-rating inter-regular label-1 m-x-1">
                            ({course.reviewsNo})
                          </span>
                          <span className="inter-regular label-1 search-result-date">
                            {course.language}
                          </span>
                          <span className="inter-regular label-1 search-result-students-number">
                            {course.level}
                          </span>
                        </div>
                        {/* <Button
                          text={
                            intl.formatMessage({ id: "InProgress" }) + " " + `${course.progress}`
                          }
                          className="check-courses-btn-progress inter-semi-bold label-1"
                        ></Button> */}
                      </div>
                      <div className="col-sm-2 text-end cart-desktop-more">
                        <div className="dropdown ddp-btn ">
                          <div
                            className="dropdown-toggle w-100 course-content-btn"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            role="menuitem"
                          >
                            <img
                              className="cursor-pointer"
                              alt="more-icon"
                              src={moreIcon}
                              width="40px"
                              height="40px"
                            ></img>
                          </div>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li
                              onClick={() =>
                                handleRemoveFromFavourites(course._id)
                              }
                              className="cursor-pointer"
                            >
                              <span className="dropdown-item">
                                <FormattedMessage id="removeFromSavedCourses" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <EmptyState
                    className="mb-5"
                    text={<FormattedMessage id="noFav" />}
                  />
                </div>
              )}
            </div>
          )}

          {activeTab === 0 && (
            <div>
              {my_courses_list.length > 0 ? (
                <div>
                  {my_courses_list?.map((course, i) => (
                    <div
                      className="row course-results-wrapper mb-3 mx-0"
                      key={i}
                    >
                      <div
                        className="col-sm-4 cursor-pointer"
                        onClick={() =>
                          navigate(`/course-details/${course._id}`)
                        }
                      >
                        <img
                          src={course.cover}
                          alt="course-img"
                          width="100%"
                        ></img>
                      </div>
                      <div
                        className="col-sm-6 cursor-pointer"
                        onClick={() =>
                          navigate(`/course-details/${course._id}`)
                        }
                      >
                        <p className="inter-semi-bold heading-3 course-title-mobile">
                          {course.title}
                        </p>
                        <div className="search-results-courses-data">
                          <span className="inter-regular label-1">
                            {course.instructors?.map(
                              (instructor, i) =>
                                instructor.fullName +
                                `${
                                  i < course.instructors.length - 1 ? ", " : " "
                                }`
                            )}
                          </span>
                          <span className="inter-regular label-1 search-result-date">
                            {moment(course.releaseDate).format("LL")}
                          </span>
                          <span className="inter-regular label-1 search-result-students-number">
                            {course.studentsNo}
                          </span>
                        </div>
                        <div className="mb-3 search-results-courses-data">
                          <Rating
                            readonly={true}
                            initialValue={course.avgRating}
                            allowFraction={true}
                          />
                          <span className="top-courses-rating inter-regular label-1 m-x-1">
                            ({course.reviewsNo})
                          </span>
                          <span className="inter-regular label-1 search-result-date">
                            {course.language}
                          </span>
                          <span className="inter-regular label-1 search-result-students-number">
                            {course.level}
                          </span>
                        </div>
                        <Button
                          text={
                            intl.formatMessage({ id: "InProgress" }) +
                            `  ${course.progress}%`
                          }
                          className="check-courses-btn-progress inter-semi-bold label-1"
                        ></Button>
                      </div>
                      {/* <div className="col-sm-2 text-end cart-desktop-more">
                       <div className="dropdown ddp-btn ">
                         <div
                           className="dropdown-toggle w-100 course-content-btn"
                           type="button"
                           id="dropdownMenuButton1"
                           data-bs-toggle="dropdown"
                           role="menuitem"
                         >
                           <img
                             className="cursor-pointer"
                             alt="more-icon"
                             src={moreIcon}
                             width="40px"
                             height="40px"
                           ></img>
                         </div>
                         <ul
                           className="dropdown-menu"
                           aria-labelledby="dropdownMenuButton1"
                         >
                           <li
                             onClick={() =>
                               handleRemoveFromFavourites(course._id)
                             }
                             className="cursor-pointer"
                           >
                             <span className="dropdown-item">
                               <FormattedMessage id="removeFromSavedCourses" />
                             </span>
                           </li>
                         </ul>
                       </div>
                     </div> */}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <EmptyState
                    className="mb-5"
                    text={<FormattedMessage id="noCourses" />}
                  />
                </div>
              )}
            </div>
            // <>
            //   <div className="row course-results-wrapper mb-3 mx-0">
            //     <div className="col-sm-4">
            //       <img src={cutMetalImg} alt="course-img" width="100%"></img>
            //     </div>
            //     <div className="col-sm-8">
            //       <p className="inter-semi-bold heading-3 mobile-courses-heading">
            //         Cutting metals and how we use the devices
            //       </p>
            //       <div className="search-results-courses-data">
            //         <span className="inter-regular label-1">
            //           Mohammed Karim
            //         </span>
            //         <span className="inter-regular label-1 search-result-date">
            //           Jan 2020
            //         </span>
            //         <span className="inter-regular label-1 search-result-students-number">
            //           400,150 student
            //         </span>
            //       </div>
            //       <div className="mb-3">
            //         <Rating
            //           readonly={true}
            //           initialValue={4}
            //           allowFraction={true}
            //         />
            //         <span className="top-courses-rating inter-regular label-1 m-x-1">
            //           (24)
            //         </span>
            //       </div>
            //       <Button
            //         text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
            //         className="check-courses-btn-progress inter-semi-bold label-1"
            //       ></Button>
            //     </div>
            //   </div>

            //   <div className="row course-results-wrapper mb-3 mx-0">
            //     <div className="col-sm-4">
            //       <img src={cutMetalImg} alt="course-img" width="100%"></img>
            //     </div>
            //     <div className="col-sm-8">
            //       <p className="inter-semi-bold heading-3">
            //         Cutting metals and how we use the devices
            //       </p>
            //       <div className="search-results-courses-data">
            //         <span className="inter-regular label-1">
            //           Mohammed Karim
            //         </span>
            //         <span className="inter-regular label-1 search-result-date">
            //           Jan 2020
            //         </span>
            //         <span className="inter-regular label-1 search-result-students-number">
            //           400,150 student
            //         </span>
            //       </div>
            //       <div className="mb-3">
            //         <Rating
            //           readonly={true}
            //           initialValue={4}
            //           allowFraction={true}
            //         />
            //         <span className="top-courses-rating inter-regular label-1 m-x-1">
            //           (24)
            //         </span>
            //       </div>
            //       <Button
            //         text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
            //         className="check-courses-btn-progress inter-semi-bold label-1"
            //       ></Button>
            //     </div>
            //   </div>

            //   <div className="row course-results-wrapper mb-3 mx-0">
            //     <div className="col-sm-4">
            //       <img src={cutMetalImg} alt="course-img" width="100%"></img>
            //     </div>
            //     <div className="col-sm-8">
            //       <p className="inter-semi-bold heading-3">
            //         Cutting metals and how we use the devices
            //       </p>
            //       <div className="search-results-courses-data">
            //         <span className="inter-regular label-1">
            //           Mohammed Karim
            //         </span>
            //         <span className="inter-regular label-1 search-result-date">
            //           Jan 2020
            //         </span>
            //         <span className="inter-regular label-1 search-result-students-number">
            //           400,150 student
            //         </span>
            //       </div>
            //       <div className="mb-3">
            //         <Rating
            //           readonly={true}
            //           initialValue={4}
            //           allowFraction={true}
            //         />
            //         <span className="top-courses-rating inter-regular label-1 m-x-1">
            //           (24)
            //         </span>
            //       </div>
            //       <Button
            //         text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
            //         className="check-courses-btn-progress inter-semi-bold label-1"
            //       ></Button>
            //     </div>
            //   </div>

            //   <div className="row course-results-wrapper mb-3 mx-0">
            //     <div className="col-sm-4">
            //       <img src={cutMetalImg} alt="course-img" width="100%"></img>
            //     </div>
            //     <div className="col-sm-8">
            //       <p className="inter-semi-bold heading-3">
            //         Cutting metals and how we use the devices
            //       </p>
            //       <div className="search-results-courses-data">
            //         <span className="inter-regular label-1">
            //           Mohammed Karim
            //         </span>
            //         <span className="inter-regular label-1 search-result-date">
            //           Jan 2020
            //         </span>
            //         <span className="inter-regular label-1 search-result-students-number">
            //           400,150 student
            //         </span>
            //       </div>
            //       <div className="mb-3">
            //         <Rating
            //           readonly={true}
            //           initialValue={4}
            //           allowFraction={true}
            //         />
            //         <span className="top-courses-rating inter-regular label-1 m-x-1">
            //           (24)
            //         </span>
            //       </div>
            //       <Button
            //         text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
            //         className="check-courses-btn-progress inter-semi-bold label-1"
            //       ></Button>
            //     </div>
            //   </div>
            // </>
          )}

          {activeTab === 2 && (
            <>
              {collections_list.length > 0 ? (
                <div>
                  {collections_list?.map((collection, i) => (
                    <div
                      className="row course-results-wrapper mb-3 mx-0 align-items-center cursor-pointer"
                      onClick={() => navigate(`/collection/${collection._id}`)}
                      key={i}
                    >
                      <div className="col-sm-3">
                        <div className="collection-bg-img">
                          <div>
                            {collection?.courses[0] ? (
                              <img
                                src={collection?.courses[0]?.cover}
                                alt="collection-cover-img"
                              ></img>
                            ) : (
                              <img
                                src={blankImg}
                                alt="collection-cover-img-blank"
                              />
                            )}
                            {collection?.courses[1] ? (
                              <img
                                src={collection?.courses[1]?.cover}
                                alt="collection-cover-img"
                              ></img>
                            ) : (
                              <img
                                src={blankImg}
                                alt="collection-cover-img-blank"
                              />
                            )}
                          </div>
                          <div>
                            {collection?.courses[2] ? (
                              <img
                                src={collection?.courses[2]?.cover}
                                alt="collection-cover-img"
                              ></img>
                            ) : (
                              <img
                                src={blankImg}
                                alt="collection-cover-img-blank"
                              />
                            )}
                            {collection?.courses[3] ? (
                              <img
                                src={collection?.courses[3]?.cover}
                                alt="collection-cover-img"
                              ></img>
                            ) : (
                              <img
                                src={blankImg}
                                alt="collection-cover-img-blank"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <p className="inter-semi-bold heading-3">
                          {collection.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  className="mb-5"
                  text={<FormattedMessage id="noCollection" />}
                  subText={<FormattedMessage id="emptyCollectionMsg" />}
                  btnIcon={addIcon}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
