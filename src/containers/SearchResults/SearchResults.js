import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import moment from "moment";
import CheckBox from "../../components/CheckBox/CheckBox";
import { Rating } from "react-simple-star-rating";
import addIcon from "../../assets/imgs/icons/add.png";
import Input from "../../components/Input/Input";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import sortIcon from "../../assets/imgs/icons/sort.png";
import closeIcon from "../../assets/imgs/icons/close-circle.png";
import filterIcon from "../../assets/imgs/icons/filter.png";
import Button from "../../components/Button/Button";
import ModalComponent from "../../components/Modal/Modal";
import blankImg from "../../assets/imgs/blankImg.webp";
import { STORE_SEARCH_QUERY } from "../../store/types/home";
import { useDispatch, useSelector } from "react-redux";
import {
  searchResult,
  getCategories,
  addToCart,
  addToFav,
  getCollectionsList,
  addNewCollection,
  addToCollection,
} from "../../store/actions/home";
import { useNavigate, useParams } from "react-router-dom";
// import EmptyState from "../../components/EmptyStateComponent/EmptyState";
import "./SearchResults.scss";

const SearchResults = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openCollection, setOpenCollection] = useState(false);
  const onOpenModalCollection = () => setOpenCollection(true);
  const onCloseModalCollection = () => setOpenCollection(false);

  const [openCollectionAdd, setOpenCollectionAdd] = useState(false);
  const onOpenModalCollectionAdd = () => setOpenCollectionAdd(true);
  const onCloseModalCollectionAdd = () => setOpenCollectionAdd(false);

  const navigate = useNavigate();
  const [collectionName, setCollectionName] = useState("");
  const { home } = useSelector((state) => state);
  const { q } = useParams();
  const dispatch = useDispatch();
  const { search_query, search_results, categories_list, collections_list } =
    home;
  const [searchResultsSliced, setSearchResultsSliced] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    languages: [],
    ratings: [],
  });
  const [filtersResults, setFiltersObj] = useState({});
  const [sort, setSort] = useState(1);
  const [currentCourse, setCurrentCourse] = useState(1);
  const [categoriesListSliced, setCategoriesListSliced] = useState([]);
  const [showMoreNumber, setShowMoreNumber] = useState(5);
  const [showMoreCategoriesNumber, setShowMoreCategoriesNumber] = useState(3);

  useEffect(() => {
    (search_query || q) &&
      dispatch(
        searchResult({
          q: search_query || q,
          ...filtersResults,
          sort: { title: sort },
        })
      );
  }, [search_query, q, dispatch, filtersResults, sort]);

  useEffect(() => {
    const filtersObj = {};
    for (let filterCategory in filters) {
      if (filters[filterCategory].length > 0) {
        filters[filterCategory].map((filterValue, i) => {
          filtersObj[`${filterCategory}[${i}]`] = filterValue;
          return null;
        });
      }
    }
    setFiltersObj(filtersObj);
    dispatch(
      searchResult({
        q: search_query || q,
        sort: { title: sort },
        ...filtersObj,
      })
    );
  }, [filters, dispatch, q, sort, search_query]);

  useEffect(() => {
    dispatch(getCategories());
    localStorage.getItem("user-data") && dispatch(getCollectionsList());
  }, [dispatch]);

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

  const handleAddToCollection = (result) => {
    setCurrentCourse(result._id);
    onOpenModalCollection();
  };

  const handleSortBy = (sortByTitle) => {
    setSort(sortByTitle);
    dispatch(
      searchResult({
        q: search_query || q,
        sort: { title: sortByTitle },
        ...filtersResults,
      })
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
      setFilters({
        ...filters,
        [filterName]: filtered,
      });
    }
  };

  return (
    <>
      <div className="search-results-container">
        <div className="row">
          <div className="col-sm-4 filters-container pe-5">
            <div className="categories-wrapper">
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="categorySearch" />
              </p>
              {categoriesListSliced
                .slice(0, showMoreCategoriesNumber)
                .map((category, index) => {
                  return (
                    <div className="mb-2" key={index}>
                      <CheckBox
                        onClick={() => {
                          handleSetFilters("categories", category._id);
                        }}
                        label={category.name}
                        index={index}
                      ></CheckBox>
                    </div>
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
              <div className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("levels", "Beginner");
                  }}
                  label="Begineer"
                  index={"Begineer"}
                ></CheckBox>
              </div>
              <div className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("levels", "Intermediate");
                  }}
                  label="Intermediate"
                  index={"Intermediate"}
                ></CheckBox>
              </div>
              <div className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("levels", "Advanced");
                  }}
                  label="Advanced"
                  index={"Advanced"}
                ></CheckBox>
              </div>
              <div className="hr"></div>
            </div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Language" />
              </p>
              <div className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("languages", "English");
                  }}
                  label="English"
                  index="English"
                ></CheckBox>
              </div>
              <div className="mb-2">
                <CheckBox
                  onClick={() => {
                    handleSetFilters("languages", "Arabic");
                  }}
                  label="Arabic"
                  index="Arabic"
                ></CheckBox>
              </div>
              <div className="hr"></div>
            </div>

            <div>
              <p className="glory-semi-bold search-result-cat-title mb-2">
                <FormattedMessage id="Rating" />
              </p>
              <div className="mb-2">
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
                  index="4.5&up"
                ></CheckBox>
              </div>
              <div className="mb-2">
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
                  index="4&up"
                ></CheckBox>
              </div>
              <div className="mb-2">
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
                  index="3.5&up"
                ></CheckBox>
              </div>
              <div className="mb-2">
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
                  index="3&up"
                ></CheckBox>
              </div>
            </div>
          </div>

          <div className="col-sm-8 pe-3 results-row-wrapper">
            <div className="d-flex mb-3 results-row align-items-center">
              <div className="col-sm-6 col-md-6">
                {search_query ? (
                  <p className="glory-semi-bold heading-4 mb-0">
                    {search_results?.length || 0} results for “
                    {search_query || q}”
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-sm-6 col-md-6 justify-content-end d-flex">
                <div className="d-flex">
                  {search_query && (
                    <Button
                      className="sort-btn inter-semi-bold label-1 mx-2"
                      text={intl.formatMessage({ id: "clearResults" })}
                      icon={closeIcon}
                      onClick={() => {
                        navigate("/search-results");
                        dispatch({
                          type: STORE_SEARCH_QUERY,
                          payload: "",
                        });
                        dispatch(
                          searchResult({
                            ...filtersResults,
                            sort: { title: sort },
                          })
                        );
                      }}
                    ></Button>
                  )}

                  <div className="dropdown ddp-btn d-inline-block">
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
                      <li
                        onClick={() => handleSortBy(1)}
                        className="cursor-pointer"
                      >
                        <span className="dropdown-item">
                          <FormattedMessage id="asc" />
                        </span>
                      </li>
                      <li
                        onClick={() => handleSortBy(-1)}
                        className="cursor-pointer"
                      >
                        <span className="dropdown-item">
                          <FormattedMessage id="dsc" />
                        </span>
                      </li>
                    </ul>
                  </div>

                  {search_query && (
                    <Button
                      className="sort-btn-mobile inter-semi-bold label-1 mx-2 align-self-baseline"
                      icon={closeIcon}
                      onClick={() => {
                        navigate("/search-results");
                        dispatch({
                          type: STORE_SEARCH_QUERY,
                          payload: "",
                        });
                        dispatch(
                          searchResult({
                            ...filtersResults,
                            sortByTitle: sort,
                          })
                        );
                      }}
                    ></Button>
                  )}

                  <div className="dropdown ddp-btn d-inline-block">
                    <div
                      className="dropdown-toggle w-100 course-content-btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      role="menuitem"
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
                        <span className="dropdown-item">
                          <FormattedMessage id="asc" />
                        </span>
                      </li>
                      <li
                        onClick={() => handleSortBy(-1)}
                        className="cursor-pointer"
                      >
                        <span className="dropdown-item">
                          <FormattedMessage id="dsc" />
                        </span>
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
                        <div
                          className="desktop-padding"
                          dir={`${
                            localStorage.getItem("lang") === "ar"
                              ? "rtl"
                              : "ltr"
                          }`}
                          style={{
                            textAlign:
                              localStorage.getItem("lang") === "ar"
                                ? "right"
                                : "left",
                          }}
                        >
                          <div className="categories-wrapper">
                            <p className="glory-semi-bold search-result-cat-title mb-2">
                              <FormattedMessage id="categorySearch" />
                            </p>
                            {categoriesListSliced
                              .slice(0, showMoreCategoriesNumber)
                              .map((category, i) => {
                                return (
                                  <div className="mb-2" key={i}>
                                    <CheckBox
                                      onClick={() => {
                                        handleSetFilters(
                                          "categories",
                                          category._id
                                        );
                                      }}
                                      label={category.name}
                                      index={i}
                                    ></CheckBox>
                                  </div>
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
                            <div className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("levels", "Beginner");
                                }}
                                label="Begineer"
                                index="Begineer"
                              ></CheckBox>
                            </div>
                            <div className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("levels", "Intermediate");
                                }}
                                label="Intermediate"
                                index="Intermediate"
                              ></CheckBox>
                            </div>
                            <div className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("levels", "Advanced");
                                }}
                                label="Advanced"
                                index="Advanced"
                              ></CheckBox>
                            </div>
                            <div className="hr"></div>
                          </div>

                          <div>
                            <p className="glory-semi-bold search-result-cat-title mb-2">
                              <FormattedMessage id="Language" />
                            </p>
                            <div className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("languages", "English");
                                }}
                                label="English"
                                index="English"
                              ></CheckBox>
                            </div>
                            <div className="mb-2">
                              <CheckBox
                                onClick={() => {
                                  handleSetFilters("languages", "Arabic");
                                }}
                                label="Arabic"
                                index="Arabic"
                              ></CheckBox>
                            </div>
                            <div className="hr"></div>
                          </div>

                          <div>
                            <p className="glory-semi-bold search-result-cat-title mb-2">
                              <FormattedMessage id="Rating" />
                            </p>
                            <div className="mb-2">
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
                                index="4.5&up"
                                onClick={() => {
                                  handleSetFilters("ratings", 4.5);
                                }}
                              ></CheckBox>
                            </div>
                            <div className="mb-2">
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
                                index="4&up"
                                onClick={() => {
                                  handleSetFilters("ratings", 4);
                                }}
                              ></CheckBox>
                            </div>
                            <div className="mb-2">
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
                                index={"3.5&up"}
                                onClick={() => {
                                  handleSetFilters("ratings", 3.5);
                                }}
                              ></CheckBox>
                            </div>
                            <div className="mb-2">
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
                                index={"3&up"}
                              ></CheckBox>
                            </div>
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
                {search_results.length > 0 ? (
                  <div>
                    {searchResultsSliced
                      .slice(0, showMoreNumber)
                      .map((result, i) => {
                        return (
                          <div
                            key={i}
                            className="row course-results-wrapper mb-3"
                          >
                            <div
                              className="col-sm-4 cursor-pointer"
                              onClick={() => {
                                navigate(`/course/${result._id}`);
                              }}
                            >
                              <img src={result.cover} alt="course-img"></img>
                            </div>
                            <div
                              className="col-sm-6 cursor-pointer"
                              onClick={() => {
                                navigate(`/course/${result._id}`);
                              }}
                            >
                              <p className="inter-semi-bold heading-3">
                                {result.title}
                              </p>
                              <div className="search-results-courses-data">
                                <span className="inter-regular label-1">
                                  {result.instructors?.map(
                                    (instructor, i) =>
                                      instructor.fullName +
                                      `${
                                        i < result.instructors.length - 1
                                          ? ", "
                                          : " "
                                      }`
                                  )}
                                </span>
                                <span className="inter-regular label-1 search-result-date">
                                  {moment(result.releaseDate).format("LL")}
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
                              {localStorage.getItem("user-data") && (
                                <div className="dropdown ddp-btn ddp-more-icon">
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
                                      onClick={() => handleAddToCart(result)}
                                      className="cursor-pointer"
                                    >
                                      <span className="dropdown-item">
                                        <FormattedMessage id="addtoCart" />
                                      </span>
                                    </li>
                                    <li
                                      onClick={() => handleAddToFav(result)}
                                      className="cursor-pointer"
                                    >
                                      <span className="dropdown-item">
                                        <FormattedMessage id="addToLearningCourse" />
                                      </span>
                                    </li>
                                    <ModalComponent
                                      open={openCollection}
                                      onOpenModal={onOpenModalCollection}
                                      onCloseModal={onCloseModalCollection}
                                      className="collection-modal"
                                      wrapperClass="d-inline-block w-100"
                                      children={
                                        <li
                                          onClick={() =>
                                            handleAddToCollection(result)
                                          }
                                          className="cursor-pointer"
                                        >
                                          <span className="dropdown-item">
                                            <FormattedMessage id="addToCollection" />
                                          </span>
                                        </li>
                                      }
                                      modalBody={
                                        <div className="collection-list-modal">
                                          <div className="d-flex align-items-baseline course-modal-heading">
                                            <div className="col-sm-4">
                                              <p className="heading-1 glory-semi-bold btnColor m-auto mb-3">
                                                {" "}
                                                <FormattedMessage id="addToCollection" />
                                              </p>
                                            </div>
                                            <div className="col-sm-8 d-flex justify-content-end">
                                              <Button
                                                className="mx-2 close-btn-browse inter-semi-bold body-1"
                                                text={
                                                  <FormattedMessage id="close" />
                                                }
                                                onClick={() => {
                                                  onCloseModalCollection();
                                                }}
                                              ></Button>

                                              <ModalComponent
                                                open={openCollectionAdd}
                                                onOpenModal={
                                                  onOpenModalCollectionAdd
                                                }
                                                onCloseModal={
                                                  onCloseModalCollectionAdd
                                                }
                                                className="collection-add-modal-search"
                                                children={
                                                  <Button
                                                    icon={addIcon}
                                                    text={intl.formatMessage({
                                                      id: "addNewCollection",
                                                    })}
                                                    className="regular-btn inter-semi-bold body-1"
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
                                                          label={
                                                            <FormattedMessage id="collectionName" />
                                                          }
                                                          className="collection-modal-input"
                                                          type="text"
                                                          value={collectionName}
                                                          onChange={(e) =>
                                                            setCollectionName(
                                                              e.target.value
                                                            )
                                                          }
                                                          placeholder={
                                                            "Ex: my collection"
                                                          }
                                                        />
                                                      </div>
                                                      <div>
                                                        {" "}
                                                        <Button
                                                          className="add-collection-btn inter-semi-bold label-1 d-flex"
                                                          text={intl.formatMessage(
                                                            {
                                                              id: "Add",
                                                            }
                                                          )}
                                                          onClick={() => {
                                                            collectionName &&
                                                              dispatch(
                                                                addNewCollection(
                                                                  collectionName
                                                                )
                                                              );
                                                            onCloseModalCollectionAdd();
                                                          }}
                                                        ></Button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                }
                                              />
                                            </div>
                                          </div>
                                          {collections_list?.map(
                                            (collection, i) => (
                                              <div
                                                key={i}
                                                className="row course-results-wrapper mb-3 mx-0 align-items-center cursor-pointer"
                                                onClick={() => {
                                                  onCloseModalCollection();
                                                  dispatch(
                                                    addToCollection(
                                                      collection._id,
                                                      currentCourse
                                                    )
                                                  );
                                                }}
                                              >
                                                <div className="col-sm-3">
                                                  <div className="collection-bg-img">
                                                    <div>
                                                      {collection
                                                        ?.courses[0] ? (
                                                        <img
                                                          src={
                                                            collection
                                                              ?.courses[0]
                                                              ?.cover
                                                          }
                                                          alt="search-cover-img"
                                                        ></img>
                                                      ) : (
                                                        <img
                                                          src={blankImg}
                                                          alt="search-cover-img-blank"
                                                        />
                                                      )}
                                                      {collection
                                                        ?.courses[1] ? (
                                                        <img
                                                          src={
                                                            collection
                                                              ?.courses[1]
                                                              ?.cover
                                                          }
                                                          alt="search-cover-img"
                                                        ></img>
                                                      ) : (
                                                        <img
                                                          src={blankImg}
                                                          alt="search-cover-img-blank"
                                                        />
                                                      )}
                                                    </div>
                                                    <div>
                                                      {collection
                                                        ?.courses[2] ? (
                                                        <img
                                                          src={
                                                            collection
                                                              ?.courses[2]
                                                              ?.cover
                                                          }
                                                          alt="search-cover-img"
                                                        ></img>
                                                      ) : (
                                                        <img
                                                          src={blankImg}
                                                          alt="search-cover-img-blank"
                                                        />
                                                      )}
                                                      {collection
                                                        ?.courses[3] ? (
                                                        <img
                                                          src={
                                                            collection
                                                              ?.courses[3]
                                                              ?.cover
                                                          }
                                                          alt="search-cover-img"
                                                        ></img>
                                                      ) : (
                                                        <img
                                                          src={blankImg}
                                                          alt="search-cover-img-blank"
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
                                            )
                                          )}
                                        </div>
                                      }
                                    />
                                  </ul>
                                </div>
                              )}
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
                ) : (
                  <div>
                    {/* <EmptyState
                    text={<FormattedMessage id="noSearchResults" />}
                  /> */}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
