import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import moment from "moment";
import CheckBox from "../../components/CheckBox/CheckBox";
import { Rating } from "react-simple-star-rating";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import filterIcon from "../../assets/imgs/icons/filter.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import Button from "../../components/Button/Button";
import ModalComponent from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  searchResult,
  getCategories,
  addToCart,
  addToFav,
} from "../../store/actions/home";
import { useParams } from "react-router-dom";
import "./SearchResults.scss";

const SearchResults = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const { home } = useSelector((state) => state);
  const { q } = useParams();
  const dispatch = useDispatch();
  const { search_query, search_results, categories_list, cart_list } = home;
  const [searchResultsSliced, setSearchResultsSliced] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    languages: [],
    ratings: [],
  });
  const [filtersResults, setFiltersObj] = useState({});
  const [sort, setSort] = useState(1);
  const [categoriesListSliced, setCategoriesListSliced] = useState([]);
  const [showMoreNumber, setShowMoreNumber] = useState(5);
  const [showMoreCategoriesNumber, setShowMoreCategoriesNumber] = useState(3);

  useEffect(() => {
    (search_query || q) &&
      dispatch(
        searchResult({
          q: search_query || q,
          ...filtersResults,
          sortByTitle: sort,
        })
      );
  }, [search_query, q]);

  useEffect(() => {
    const filtersObj = {};
    for (let filterCategory in filters) {
      if (filters[filterCategory].length > 0) {
        filters[filterCategory].map((filterValue, i) => {
          filtersObj[`${filterCategory}[${i}]`] = filterValue;
        });
      }
    }
    setFiltersObj(filtersObj);
    dispatch(
      searchResult({ q: search_query || q, sortByTitle: sort, ...filtersObj })
    );
  }, [filters]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (search_results.length > 0) {
      setSearchResultsSliced(search_results);
    }
  }, [search_results]);
  useEffect(() => {
    if (categories_list.length > 0) {
      setCategoriesListSliced(categories_list);
    }
  }, [categories_list]);

  const intl = useIntl();

  const handleAddToCart = (result) => {
    dispatch(addToCart(result._id));
  };

  const handleAddToFav = (result) => {
    dispatch(addToFav(result._id));
  };

  const handleSortBy = (sortByTitle) => {
    setSort(sortByTitle);
    dispatch(
      searchResult({ q: search_query || q, sortByTitle, ...filtersResults })
    );
  };

  const handleSetFilters = (filterName, filterValue) => {
    const found = filters[filterName].some((el) => el === filterValue);
    if (!found) {
      setFilters({
        ...filters,
        [filterName]: [...filters[filterName], filterValue],
      });
    } else {
      const filtered = filters[filterName].filter((el) => el !== filterValue);
      console.log("nooo", filtered);
      setFilters({
        ...filters,
        [filterName]: filtered,
      });
    }
  };

  return (
    <>
      <Header></Header>
      <div className="search-results-container">
        <div className="row">
          <div className="col-sm-4 filters-container pe-5">
            <div className="categories-wrapper">
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="categorySearch" />
              </p>
              {categoriesListSliced
                .slice(0, showMoreCategoriesNumber)
                .map((category) => {
                  return (
                    <p className="mb-2">
                      <CheckBox
                        onClick={() => {
                          handleSetFilters("categories", category._id);
                        }}
                        label={category.en.name}
                      ></CheckBox>
                    </p>
                  );
                })}
            </div>
            {categoriesListSliced.slice(0, showMoreCategoriesNumber).length <
              categories_list.length && (
              <div
                className="cursor-pointer d-flex"
                onClick={() =>
                  setShowMoreCategoriesNumber(showMoreCategoriesNumber + 3)
                }
              >
                <button className="show-more-btn-category inter-semi-bold">
                  <FormattedMessage id="showMore" />
                </button>
              </div>
            )}
            <div
              className={`${
                categoriesListSliced.slice(0, showMoreCategoriesNumber).length <
                  categories_list.length && "mt-0"
              } hr`}
            ></div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Level" />
              </p>
              <p className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("levels", "Beginner");
                  }}
                  label="Begineer"
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("levels", "Intermediate");
                  }}
                  label="Intermediate"
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("levels", "Advanced");
                  }}
                  label="Advanced"
                ></CheckBox>
              </p>
              <div className="hr"></div>
            </div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Language" />
              </p>
              <p className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("languages", "English");
                  }}
                  label="English"
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("languages", "Arabic");
                  }}
                  label="Arabic"
                ></CheckBox>
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
                      <Rating
                        readonly={true}
                        initialValue={4.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        4.5 & up
                      </span>
                    </div>
                  }
                  onClick={() => {
                    handleSetFilters("ratings", 4.5);
                  }}
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  label={
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={4}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        4 & up
                      </span>
                    </div>
                  }
                  onClick={() => {
                    handleSetFilters("ratings", 4);
                  }}
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  label={
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={3.5}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        3.5 & up
                      </span>
                    </div>
                  }
                  onClick={() => {
                    handleSetFilters("ratings", 3.5);
                  }}
                ></CheckBox>
              </p>
              <p className="mb-2">
                <CheckBox
                  label={
                    <div>
                      <Rating
                        readonly={true}
                        initialValue={3}
                        allowFraction={true}
                      />
                      <span className="top-courses-rating inter-regular label-1 m-x-1">
                        3 & up
                      </span>
                    </div>
                  }
                  onClick={() => {
                    handleSetFilters("ratings", 3);
                  }}
                ></CheckBox>
              </p>
            </div>
          </div>

          <div className="col-sm-8 pe-3 results-row-wrapper">
            <div className="d-flex align-items-end mb-3 results-row">
              <div className="col-sm-8 col-md-6">
                <p className="glory-semi-bold heading-4 mb-0">
                  {search_results?.length || 0} results for “{search_query || q}
                  ”
                </p>
              </div>
              <div className="col-sm-4 col-md-6 justify-content-end d-flex">
                <div>
                  <div className="dropdown ddp-btn ">
                    <div
                      className="dropdown-toggle w-100 course-content-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
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
                      <li
                        onClick={() => handleSortBy(1)}
                        className="cursor-pointer"
                      >
                        <a className="dropdown-item">
                          <FormattedMessage id="asc" />
                        </a>
                      </li>
                      <li
                        onClick={() => handleSortBy(-1)}
                        className="cursor-pointer"
                      >
                        <a className="dropdown-item">
                          <FormattedMessage id="dsc" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown ddp-btn d-inline-block">
                    <div
                      className="dropdown-toggle w-100 course-content-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Button
                        className="sort-btn-mobile inter-semi-bold label-1"
                        icon={sortIcon}
                      ></Button>
                    </div>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li
                        onClick={() => handleSortBy(1)}
                        className="cursor-pointer"
                      >
                        <a className="dropdown-item">
                          <FormattedMessage id="asc" />
                        </a>
                      </li>
                      <li
                        onClick={() => handleSortBy(-1)}
                        className="cursor-pointer"
                      >
                        <a className="dropdown-item">
                          <FormattedMessage id="dsc" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {
                    <ModalComponent
                      open={open}
                      onOpenModal={onOpenModal}
                      onCloseModal={onCloseModal}
                      className="header-modal"
                      wrapperClass="d-inline-block"
                      children={
                        <Button
                          className="filter-btn-mobile inter-semi-bold label-1"
                          icon={filterIcon}
                          onClick={() => {
                            setFilters({
                              categories: [],
                              levels: [],
                              languages: [],
                              ratings: [],
                            });
                            dispatch(
                              searchResult({
                                q: search_query || q,
                                sortByTitle: sort,
                              })
                            );
                          }}
                        ></Button>
                      }
                      modalBody={
                        <div className="desktop-padding">
                          <div className="categories-wrapper">
                            <p className="glory-semi-bold search-result-cat-title mb-2">
                              <FormattedMessage id="categorySearch" />
                            </p>
                            {categoriesListSliced
                              .slice(0, showMoreCategoriesNumber)
                              .map((category) => {
                                return (
                                  <p className="mb-2">
                                    <CheckBox
                                      onClick={() => {
                                        handleSetFilters(
                                          "categories",
                                          category._id
                                        );
                                      }}
                                      label={category.en.name}
                                    ></CheckBox>
                                  </p>
                                );
                              })}
                          </div>
                          {categoriesListSliced.slice(
                            0,
                            showMoreCategoriesNumber
                          ).length < categories_list.length && (
                            <div
                              className="cursor-pointer d-flex"
                              onClick={() =>
                                setShowMoreCategoriesNumber(
                                  showMoreCategoriesNumber + 3
                                )
                              }
                            >
                              <button className="show-more-btn-category inter-semi-bold">
                                <FormattedMessage id="showMore" />
                              </button>
                            </div>
                          )}
                          <div
                            className={`${
                              categoriesListSliced.slice(
                                0,
                                showMoreCategoriesNumber
                              ).length < categories_list.length && "mt-0"
                            } hr`}
                          ></div>

                          <div>
                            <p className="glory-semi-bold search-result-cat-title mb-2">
                              <FormattedMessage id="Level" />
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("levels", "Beginner");
                                }}
                                label="Begineer"
                              ></CheckBox>
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("levels", "Intermediate");
                                }}
                                label="Intermediate"
                              ></CheckBox>
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("levels", "Advanced");
                                }}
                                label="Advanced"
                              ></CheckBox>
                            </p>
                            <div className="hr"></div>
                          </div>

                          <div>
                            <p className="glory-semi-bold search-result-cat-title mb-2">
                              <FormattedMessage id="Language" />
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("languages", "English");
                                }}
                                label="English"
                              ></CheckBox>
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("languages", "Arabic");
                                }}
                                label="Arabic"
                              ></CheckBox>
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
                                    <Rating
                                      readonly={true}
                                      initialValue={4.5}
                                      allowFraction={true}
                                    />
                                    <span className="top-courses-rating inter-regular label-1 m-x-1">
                                      4.5 & up
                                    </span>
                                  </div>
                                }
                                onClick={() => {
                                  handleSetFilters("ratings", 4.5);
                                }}
                              ></CheckBox>
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                label={
                                  <div>
                                    <Rating
                                      readonly={true}
                                      initialValue={4}
                                      allowFraction={true}
                                    />
                                    <span className="top-courses-rating inter-regular label-1 m-x-1">
                                      4 & up
                                    </span>
                                  </div>
                                }
                                onClick={() => {
                                  handleSetFilters("ratings", 4);
                                }}
                              ></CheckBox>
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                label={
                                  <div>
                                    <Rating
                                      readonly={true}
                                      initialValue={3.5}
                                      allowFraction={true}
                                    />
                                    <span className="top-courses-rating inter-regular label-1 m-x-1">
                                      3.5 & up
                                    </span>
                                  </div>
                                }
                                onClick={() => {
                                  handleSetFilters("ratings", 3.5);
                                }}
                              ></CheckBox>
                            </p>
                            <p className="mb-2">
                              <CheckBox
                                label={
                                  <div>
                                    <Rating
                                      readonly={true}
                                      initialValue={3}
                                      allowFraction={true}
                                    />
                                    <span className="top-courses-rating inter-regular label-1 m-x-1">
                                      3 & up
                                    </span>
                                  </div>
                                }
                                onClick={() => {
                                  handleSetFilters("ratings", 3);
                                }}
                              ></CheckBox>
                            </p>
                          </div>
                        </div>
                      }
                    />
                  }
                </div>
              </div>
            </div>
            {search_results.length > 0 && (
              <div className="search-results-section">
                {searchResultsSliced.slice(0, showMoreNumber).map((result) => {
                  return (
                    <div className="d-flex course-results-wrapper mb-5">
                      <div className="col-sm-4">
                        <img src={cutMetalImg} alt="course-img"></img>
                      </div>
                      <div className="col-sm-6">
                        <p className="inter-semi-bold heading-3">
                          {result.title}
                        </p>
                        <div className="search-results-courses-data">
                          <span className="inter-regular label-1">
                            {result.instructors.map(
                              (instructor) => instructor.fullName
                            )}
                          </span>
                          <span className="inter-regular label-1 search-result-date">
                            {moment(result.release_date).format("LL")}
                          </span>
                          <span className="inter-regular label-1 search-result-students-number">
                            {result.studentsNo}
                          </span>
                        </div>
                        <div className="d-flex">
                          <div>
                            <Rating
                              readonly={true}
                              initialValue={result.avgRating}
                              allowFraction={true}
                            />
                            <span className="top-courses-rating inter-regular label-1 m-x-1">
                              ({result.reviewsNo})
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

                      <div className="col-sm-2 text-end">
                        <div className="dropdown ddp-btn ddp-more-icon">
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
                              onClick={() => handleAddToCart(result)}
                              className="cursor-pointer"
                            >
                              <a className="dropdown-item">
                                <FormattedMessage id="addtoCart" />
                              </a>
                            </li>
                            <li
                              onClick={() => handleAddToFav(result)}
                              className="cursor-pointer"
                            >
                              <a className="dropdown-item">
                                <FormattedMessage id="addToLearningCourse" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {searchResultsSliced.slice(0, showMoreNumber).length <
                  search_results.length && (
                  <div
                    className="cursor-pointer d-flex"
                    onClick={() => setShowMoreNumber(showMoreNumber + 5)}
                  >
                    <button className="show-more-btn inter-semi-bold">
                      <FormattedMessage id="showMore" />
                    </button>
                  </div>
                )}
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
