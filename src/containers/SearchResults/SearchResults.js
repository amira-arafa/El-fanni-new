import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import CheckBox from "../../components/CheckBox/CheckBox";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import star from "../../assets/imgs/icons/star.png";
import star2 from "../../assets/imgs/icons/vector.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import filterIcon from "../../assets/imgs/icons/filter.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import Button from "../../components/Button/Button";
import "./SearchResults.scss";

const SearchResults = () => {
  const intl = useIntl();
  return (
    <>
      <Header></Header>
      <div className="search-results-container">
        <div className="row">
          <div className="col-sm-4 filters-container pe-5">
            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="categorySearch" />
              </p>
              <p className="mb-2">
                <CheckBox label="category #1"></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox label="category #2"></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox label="category #3"></CheckBox>
              </p>
              <div className="hr"></div>
            </div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Level" />
              </p>
              <p className="mb-2">
                <CheckBox label="Begineer"></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox label="Intermediate"></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox label="Advanced"></CheckBox>
              </p>
              <div className="hr"></div>
            </div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Language" />
              </p>
              <p className="mb-2">
                <CheckBox label="English"></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox label="Arabic"></CheckBox>
              </p>
              <div className="hr"></div>
            </div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Rating" />
              </p>
              <p className="mb-2">
                <CheckBox
                  label={
                    <div>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
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
                  }
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  label={
                    <div>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
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
                  }
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  label={
                    <div>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
                        <img src={star} alt="star" width="15px" heigth="15px" />
                      </span>
                      <span className="mx-1 align-text-bottom">
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
                  }
                ></CheckBox>
              </p>
            </div>
          </div>

          <div className="col-sm-8 pe-3 results-row-wrapper">
            <div className="d-flex align-items-end mb-3 results-row">
              <div className="col-sm-8 col-md-6">
                <p className="glory-semi-bold heading-4 mb-0">
                  35 results for “Mechanic”
                </p>
              </div>
              <div className="col-sm-4 col-md-6 justify-content-end d-flex">
                <div>
                <Button
                  className="sort-btn inter-semi-bold label-1"
                  text={intl.formatMessage({ id: "sortBy" })}
                  icon={sortIcon}
                ></Button>
                 <Button
                  className="sort-btn-mobile inter-semi-bold label-1 me-2"
                  icon={sortIcon}
                ></Button>
                 <Button
                  className="filter-btn-mobile inter-semi-bold label-1"
                  icon={filterIcon}
                ></Button>
                </div>
              </div>
            </div>
            <div className="search-results-section">
              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4"><img src={cutMetalImg} alt="course-img"></img></div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">Cutting metals and how we use the devices</p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">Mohammed Karim</span>
                    <span className="inter-regular label-1 search-result-date">Jan 2020</span>
                    <span className="inter-regular label-1 search-result-students-number">400,150 student</span>
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
                </div>
              </div>

              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4"><img src={cutMetalImg} alt="course-img"></img></div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">Cutting metals and how we use the devices</p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">Mohammed Karim</span>
                    <span className="inter-regular label-1 search-result-date">Jan 2020</span>
                    <span className="inter-regular label-1 search-result-students-number">400,150 student</span>
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
                </div>
              </div>

              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4"><img src={cutMetalImg} alt="course-img"></img></div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">Cutting metals and how we use the devices</p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">Mohammed Karim</span>
                    <span className="inter-regular label-1 search-result-date">Jan 2020</span>
                    <span className="inter-regular label-1 search-result-students-number">400,150 student</span>
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
                </div>
              </div>

              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4"><img src={cutMetalImg} alt="course-img"></img></div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">Cutting metals and how we use the devices</p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">Mohammed Karim</span>
                    <span className="inter-regular label-1 search-result-date">Jan 2020</span>
                    <span className="inter-regular label-1 search-result-students-number">400,150 student</span>
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

export default SearchResults;
