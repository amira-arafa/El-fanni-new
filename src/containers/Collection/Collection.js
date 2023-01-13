import React, { useState,useEffect } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import moment from "moment";
import editUser from "../../assets/imgs/icons/user-edit.png";
import Button from "../../components/Button/Button";
import { Rating } from "react-simple-star-rating";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import sortUp from "../../assets/imgs/icons/direct-up.png";
import { getProfile, getCollection, deleteCollection, removeFromCollection } from "../../store/actions/home";
import trashIcon from "../../assets/imgs/icons/trash2.png";
import sortDown from "../../assets/imgs/icons/direct-down.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import deleteIcon from "../../assets/imgs/icons/Delete.png";
import ModalComponent from "../../components/Modal/Modal"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router-dom"
import { FormattedMessage, useIntl } from "react-intl";
import "./Collection.scss";
import EmptyState from "../../components/EmptyStateComponent/EmptyState";

const Collection = () => {
  const intl = useIntl();
  const { id } = useParams();
  const navigate = useNavigate();
  const { home } = useSelector((state) => state);
  const { profile_info, single_collection } = home;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getCollection(id));
  }, []);

  useEffect(() => {
    if (profile_info) {
      setFirstName(profile_info.firstName);
      setLastName(profile_info.lastName);
      setEmail(profile_info.email);
      setPhoto(profile_info.photo);
      profile_info.phone && setPhone(profile_info.phone);
    }
  }, [profile_info]);

  const handleDeleteCollection = () => {
    dispatch(deleteCollection(id));
    onCloseModal();
    navigate("/profile");
  }

  const handleRemoveFromCollection = (courseId) => {
    dispatch(removeFromCollection(id,courseId));
  }

  return (
    <>
      <Header></Header>
    <div className="profile-page-wrapper">
      <div className="profile-page">
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
            <p className="profile-courses-number glory-semi-bold heading">4</p>
          </div>
          <div className="col-sm-3 mobile-email-wrapper">
            <p className="label-1 inter-semi-bold mb-0">
              <FormattedMessage id="Phone" />
            </p>
            <p className="label-1 inter-regular">{phone}</p>
            <p className="label-1 inter-semi-bold mb-0">
              <FormattedMessage id="Coursecompleted" />
            </p>
            <p className="profile-courses-number glory-semi-bold heading">15</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end sort-icon-wrapper align-items-baseline">
        <div className="col-sm-6">
          <p className="glory-semi-bold heading-4 btnColor mb-0">{single_collection?.name}</p>
        </div>
        <div className="col-sm-6 d-flex justify-content-end">
        <ModalComponent
          open={open}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          className="remove-collection-modal"
          children={
            <>
            <Button
            icon={trashIcon}
            text={intl.formatMessage({ id: "removeCollection" })}
            className="w-100 delete-collection-btn inter-semi-bold body-1"
          />
            <Button
            icon={trashIcon}
            className="w-100 delete-collection-btn-mobile inter-semi-bold body-1"
          />
            </>
          }
          modalBody={
            <div className="row align-items-center">
              <div className="col-sm-2">
                <img src={deleteIcon} alt="delete-icon" />
              </div>
              <div className="col-sm-10">
                <p className="px-2 mb-1 delete-collection-warning">
                  <FormattedMessage id="deleteCollectionTitle"/>
                </p>
                <p className="px-2 mb-1 delete-course-text">
                  <FormattedMessage id="deleteCollectionMsg"/>
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div onClick={()=>onCloseModal()}> <Button className="mx-2 keep-btn" text={<FormattedMessage id="NoKeep"/>}> </Button></div>
                <div onClick={()=> handleDeleteCollection()}> <Button className="yes-remove-btn-collection" text={<FormattedMessage id="yesRemove"/>}></Button></div>
              </div>
            </div>
          }
        />

        <div >
          <div className="sort-arrows mx-3">
            <img src={sortUp} alt="sort-up" width="24px" height="24px"></img>
            <img src={sortDown} alt="sort-down"  width="24px" height="24px"></img>
          </div>
        </div>
          <div >
            <Button
              className="sort-btn inter-semi-bold label-1"
              text={intl.formatMessage({ id: "sortBy" })}
              icon={sortIcon}
            ></Button>
          </div>
        </div>
    
      </div>

        {single_collection?.courses?.length >0 ?<>
        {single_collection && single_collection.courses?.map((course)=><div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-4">
            <img src={course.cover} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-6">
            <p className="inter-semi-bold heading-3 course-title-mobile">
              {course.title}
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1"> {course.instructors?.map(
                 (instructor, i) => instructor.fullName  + `${i< course.instructors.length-1 ? ', ' : ' '}`
                )}</span>
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
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn-progress inter-semi-bold label-1"
            ></Button>
          </div>
          <div className="col-sm-2 text-end cart-desktop-more">
                        <div className="dropdown ddp-btn ">
                          <div
                            className="dropdown-toggle w-100 course-content-btn"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
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
                              onClick={() => handleRemoveFromCollection(course._id)}
                              className="cursor-pointer"
                            >
                              <a className="dropdown-item">
                                <FormattedMessage id="removeFromCollection" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
        </div>)}
        
   
        </> : <EmptyState text={<FormattedMessage id="noCoursesCollection"/>}/>}
     

    </div>
      <Footer></Footer>
    </>
  );
};

export default Collection;
