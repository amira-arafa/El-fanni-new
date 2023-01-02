import React, { useState, useEffect } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import teacher4 from "../../assets/imgs/teacher4.png";
import editUser from "../../assets/imgs/icons/user-edit.png";
import Button from "../../components/Button/Button";
import star from "../../assets/imgs/icons/star.png";
import sortUp from "../../assets/imgs/icons/direct-up.png";
import sortDown from "../../assets/imgs/icons/direct-down.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import star2 from "../../assets/imgs/icons/vector.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import collection1 from "../../assets/imgs/collection1.png";
import collection2 from "../../assets/imgs/collection2.png";
import collection3 from "../../assets/imgs/collection3.png";
import collection4 from "../../assets/imgs/collection4.png";
import { getProfile, getFavourites, getCollections } from "../../store/actions/home";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss";

const Profile = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { home } = useSelector((state) => state);
  const { profile_info } = home;

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if(activeTab === 1){
     dispatch(getFavourites());
    }else if( activeTab === 2){
     dispatch(getCollections());
    }
  }, [activeTab]);

  useEffect(() => {
    if (profile_info) {
      setFirstName(profile_info.firstName);
      setLastName(profile_info.lastName);
      setEmail(profile_info.email);
      setPhoto(profile_info.photo);
      profile_info.phone && setPhone(profile_info.phone);
    }
  }, [profile_info]);


  return (
    <div className="profile-page-wrapper">
      <Header></Header>
      <div className="profile-page">
        <div className="profile-info row">
          <div className="col-sm-6">
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
                  onClick={()=> {navigate("/profile-edit")}}
                ></Button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <p className="label-1 inter-semi-bold mb-0">
              <FormattedMessage id="Email" />
            </p>
            <p className="label-1 inter-regular">{email}</p>
            <p className="label-1 inter-semi-bold mb-0">
              <FormattedMessage id="courseInProgress" />
            </p>
            <p className="profile-courses-number glory-semi-bold heading">4</p>
          </div>
          <div className="col-sm-3">
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
      <div className="d-flex justify-content-end sort-icon-wrapper">
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

      {activeTab === 0 && (
        <>
        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>
        
        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>

        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>

        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>
        </>
      )}

{activeTab === 1 && (
        <>
        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>
        
        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>

        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>

        <div className="row course-results-wrapper mb-3 mx-0">
          <div className="col-sm-3">
            <img src={cutMetalImg} alt="course-img" width="100%"></img>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
              Cutting metals and how we use the devices
            </p>
            <div className="search-results-courses-data">
              <span className="inter-regular label-1">Mohammed Karim</span>
              <span className="inter-regular label-1 search-result-date">
                Jan 2020
              </span>
              <span className="inter-regular label-1 search-result-students-number">
                400,150 student
              </span>
            </div>
            <div className="mb-3">
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
                <img src={star2} alt="star" width="13px" heigth="13px" />
              </span>
              <span className="top-courses-rating inter-regular label-1 m-x-1">
                (24)
              </span>
            </div>
            <Button
              text={intl.formatMessage({ id: "InProgress" }) + " (50%)"}
              className="check-courses-btn inter-semi-bold label-1"
            ></Button>
          </div>
        </div>
        </>
      )}


{activeTab === 2 && (
        <>
        <div className="row course-results-wrapper mb-3 mx-0 align-items-center">
          <div className="col-sm-3">
            <div className="collection-bg-img">
              <img src={collection1} alt="course-img"></img>
              <img src={collection2} alt="course-img"></img>
              <img src={collection3} alt="course-img"></img>
              <img src={collection4} alt="course-img"></img>
            </div>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
            My Collection for technical courses
            </p>
          </div>
        </div>

        <div className="row course-results-wrapper mb-3 mx-0 align-items-center">
          <div className="col-sm-3">
            <div className="collection-bg-img">
              <img src={collection1} alt="course-img"></img>
              <img src={collection2} alt="course-img"></img>
              <img src={collection3} alt="course-img"></img>
              <img src={collection4} alt="course-img"></img>
            </div>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
            My Collection for technical courses
            </p>
          </div>
        </div>

        <div className="row course-results-wrapper mb-3 mx-0 align-items-center">
          <div className="col-sm-3">
            <div className="collection-bg-img">
              <img src={collection1} alt="course-img"></img>
              <img src={collection2} alt="course-img"></img>
              <img src={collection3} alt="course-img"></img>
              <img src={collection4} alt="course-img"></img>
            </div>
          </div>
          <div className="col-sm-9">
            <p className="inter-semi-bold heading-3">
            My Collection for technical courses
            </p>
          </div>
        </div>

        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Profile;
