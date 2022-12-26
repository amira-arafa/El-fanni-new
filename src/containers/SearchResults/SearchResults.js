import React, { useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import moment from "moment";
import CheckBox from "../../components/CheckBox/CheckBox";
import { Rating } from "react-simple-star-rating";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import star from "../../assets/imgs/icons/star.png";
import star2 from "../../assets/imgs/icons/vector.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import filterIcon from "../../assets/imgs/icons/filter.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "../../store/actions/home";
import "./SearchResults.scss";

const SearchResults = () => {
  const { home } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { search_query, search_results } = home;

  useEffect(() => {
    search_query && dispatch(searchResult({ q: search_query }));
  }, [search_query]);
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
                  {search_results?.length || 0} results for “{search_query}”
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
            {search_results.length > 0 && (
              <div className="search-results-section">
                {search_results.map((result) => {
                  return (
                    <div className="d-flex course-results-wrapper mb-5">
                      <div className="col-sm-4">
                        <img src={cutMetalImg} alt="course-img"></img>
                      </div>
                      <div className="col-sm-8">
                        <p className="inter-semi-bold heading-3">
                          {result.title}
                        </p>
                        <div className="search-results-courses-data">
                          <span className="inter-regular label-1">
                            Mohammed Karim
                          </span>
                          <span className="inter-regular label-1 search-result-date">
                            {moment(result.release_date).format("LL")}
                          </span>
                          <span className="inter-regular label-1 search-result-students-number">
                            400,150 student
                          </span>
                        </div>
                        <div className="d-flex">
                          <div>
                            <Rating
                              readonly={true}
                              initialValue={result.avgRate}
                              allowFraction={true}
                            />
                            <span className="top-courses-rating inter-regular label-1 m-x-1">
                              (24)
                            </span>
                          </div>
                          <div>
                            {" "}
                            <span className="inter-regular label-1 search-result-students-number levels-color">
                              {result.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchResults;
