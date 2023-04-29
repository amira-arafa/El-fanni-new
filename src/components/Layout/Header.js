import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import logoMobile from "../../assets/imgs/logoMobile.png";
import logo from "../../assets/imgs/icons/logo-latest.png";
import angleDown from "../../assets/imgs/icons/angle-down-dark.png";
import loginIcon from "../../assets/imgs/icons/login-icon-dark.png";
import search from "../../assets/imgs/icons/search-black.png";
import category from "../../assets/imgs/icons/category.png";
import SideNav from "react-simple-sidenav";
import menu from "../../assets/imgs/icons/menu.png";
import closeIcon from "../../assets/imgs/icons/close-circle-grey.png";
// import logo from "../../assets/imgs/logo.png";
// import arrowDown from "../../assets/imgs/icons/angle-down.png";
// import loginIcon from "../../assets/imgs/icons/loginIcon.png";
// import search from "../../assets/imgs/icons/Group 510.png";
// import cartWhite from "../../assets/imgs/icons/shopping-cart-white.png";
import cartBlack from "../../assets/imgs/icons/shopping-cart-black.png";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../store/actions/auth";
import { getCartList, getCategories } from "../../store/actions/home";
import { SUCESS_LOG_OUT } from "../../store/types/auth";
import { STORE_SEARCH_QUERY } from "../../store/types/home";
import Input from "../../components/Input/Input";
import ModalComponentV2 from "../Modal/Modal";
import "./Header.scss";
import BrowseModalContent from "../Modal/BrowseModalContent/index";
import SearchModalContent from "../Modal/SearchModalContent";

const Header = ({ className }) => {
  const [showNav, setShowNav] = useState(false);
  const [showNavBrowse, setShowNavBrowse] = useState(false);

  const [openBrowseModal, setOpenBrowseModal] = useState(false);
  const onOpenModalBrowseModal = () => setOpenBrowseModal(true);
  const onCloseModalBrowseModal = () => setOpenBrowseModal(false);

  const [openSearchModal, setOpenSearchModal] = useState(false);
  const onOpenSearchModal = () => setOpenSearchModal(true);
  const onCloseSearchModal = () => setOpenSearchModal(false);

  const navigate = useNavigate();
  const intl = useIntl();
  const { auth, home } = useSelector((state) => state);
  const { cart_list, categories_list } = home;
  const dispatch = useDispatch();
  const { user_data } = auth;
  const [searchValue, setSearchValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState(0);
  const language = localStorage.getItem("lang") === "ar" ? "ar" : "en"

  useEffect(() => {
    if (auth.sucess_logout) {
      navigate("/sign-in");
    }
    return () => {
      dispatch({
        type: SUCESS_LOG_OUT,
        payload: false,
      });
    };
  }, [auth.sucess_logout, navigate, dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    localStorage.getItem("token") && dispatch(getCartList());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(Logout());
  };

  const handleSearchChange = (e) => setSearchValue(e.target.value)

  const handleCategoryChange = (category) => setCurrentCategory(category);

  const redirectTosearchPage = () => {
    navigate(`/search-results/${searchValue}`);
    onCloseSearchModal();
    dispatch({
      type: STORE_SEARCH_QUERY,
      payload: searchValue,
    });
  };

  return (
    <div className={`header-container d-flex`}>
      <div className="col-md-9 col-sm-8">
        <div className="d-flex align-items-center row">
          <div className="col-sm-5 col-md-4 d-flex align-items-center">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img alt="logo" src={logo} width="100%" height="100%"/>
            </div>
          </div>
          
          <div className="col-sm-7 col-md-8 nav-items-container inter-semi-bold">
            <div onClick={onOpenModalBrowseModal} className="body-1 d-flex gap-2 align-items-center cursor-pointer">
              <span>
                <FormattedMessage id="courses"/>
              </span>
              <img src={angleDown} alt="arrowDownBrowse" />
            </div>
            <span className="body-1 cursor-pointer" onClick={() => navigate("/about-us")}>
              <FormattedMessage id="aboutUs" />
            </span>
            <span className="body-1 cursor-pointer">
              <FormattedMessage id="EUJobs" />
            </span>
            <span className="body-1 cursor-pointer">
              <FormattedMessage id="advisoryBoard" />
            </span>
            <span className="body-1 cursor-pointer">
              <FormattedMessage id="contacts" />
            </span>
          </div>
        </div>
      </div>

      <div className="col-sm-3 is-mobile justify-content-end gap-3 search-cart-container">
        <div className="d-flex cursor-pointer search-container" onClick={onOpenSearchModal}>
          <img
            alt="search"
            src={search}
          ></img>
        </div>

        <div className="d-flex align-items-center cursor-pointer cart-icon-wrapper">
          <img
            alt="cart"
            src={cartBlack}
            width="35px"
            height="35px"
            onClick={() => navigate("/cart")}
          ></img>
          <span className="cart-number">{cart_list.length}</span>
        </div>

        <div className="cursor-pointer">
          {localStorage.getItem("user-data") ? (
            <div className="d-flex justify-content-center">
              <div className="dropdown ddp-btn ">
                <div
                  className="dropdown-toggle w-100 course-content-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  role="menuitem"
                >
                  <img
                    className="logout-user me-2"
                    alt="user-img"
                    src={user_data.photo}
                    width="40"
                    height="40"
                  />
                   <img src={angleDown} alt="angle-down" />
                </div>
                <ul
                  className="dropdown-menu w-100"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={() => navigate("/profile")}>
                    <span className="dropdown-item cursor-pointer">
                      <FormattedMessage id="Profile" />
                    </span>
                  </li>
                  <li onClick={() => handleLogout()}>
                    <span className="dropdown-item cursor-pointer">
                      <FormattedMessage id="Logout" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div
              className="d-flex gap-2 sign-in-header align-items-center"
              onClick={() => navigate("/sign-in")}
            >
              <span className="inter-semi-bold body-1">
                <FormattedMessage id="signIn" />
              </span>
              <img
                alt="signIn"
                src={loginIcon}
                width="20px"
                height="20px"
              ></img>
            </div>
          )}
        </div>
      </div>

      <div className="col-sm-4 mobile-icons">
        <div className="d-flex align-items-center">
          <div className="col-sm-4 d-flex justify-content-center">
            <div className="dropdown ddp-btn ">
              <div
                className="dropdown-toggle w-100 "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                role="menuitem"
              >
                <img alt="search" src={search} width="20px" height="20px"></img>
              </div>
              <ul
                className="dropdown-menu search-mobile-dropdown p-0"
                aria-labelledby="dropdownMenuButton1"
              >
                <div className="d-flex align-items-center">
                  <div>
                    <Input
                      type="text"
                      className="search-mobile-field"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder={intl.formatMessage({ id: "search" })}
                    />
                  </div>
                  <div>
                    <div className="search-icon-mobile-wrapper">
                      <img
                        alt="search-icon-mobile"
                        src={search}
                        width="20"
                        height="20"
                        className="cursor-pointer"
                        onClick={() => redirectTosearchPage()}
                      />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <img
              alt="category"
              src={category}
              width="20px"
              height="20px"
              className="m-x-1"
              onClick={() => {
                setShowNavBrowse(!showNavBrowse);
              }}
            ></img>
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <img
              alt="menu"
              src={menu}
              width="20px"
              height="20px"
              className="m-x-1"
              onClick={() => {
                setShowNav(!showNav);
              }}
            ></img>
          </div>
        </div>
      </div>

      <SideNav
        openFromLeft={language === "en"}
        openFromRight={language === "ar"}
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        titleStyle={{ backgroundColor: "#FF5722" }}
        items={[
          <div className="d-flex align-items-center justify-content-between">
            <div className="mobile-logo d-flex align-items-center">
              <div>
                <img
                  alt="logo"
                  src={logoMobile}
                  width="50"
                  height="50"
                  onClick={() => navigate("/")}
                ></img>
              </div>
              <div className="glory-bold heading-4 mx-2">
                {<FormattedMessage id="ElFanni" />}
              </div>
            </div>
            <div>
              <img
                src={closeIcon}
                alt="closeIcon"
                onClick={() => {
                  setShowNav(false);
                }}
              />
            </div>
          </div>,
          <div>
            <span
              className="inter-regular body-1"
              onClick={() => navigate("/about-us")}
            >
              <FormattedMessage id="aboutUs" />
            </span>
          </div>,
          <div>
            <span
              className="inter-regular body-1"
              onClick={() => navigate("/cart")}
            >
              <FormattedMessage id="Cart" />
            </span>
          </div>
          ,
          !localStorage.getItem("user-data") ? (
            <div onClick={() => navigate("/sign-in")}>
              <span className="inter-regular body-1">
                <FormattedMessage id="signIn" />
              </span>
            </div>
          ) : (
            <div>
              <span
                className="inter-regular body-1"
                onClick={() => navigate("/profile")}
              >
                <FormattedMessage id="Profile" />
              </span>
            </div>
          ),
          !localStorage.getItem("user-data") ? (
            <div></div>
          ) : (
            <div>
              <span
                className="inter-regular body-1"
                onClick={() => handleLogout()}
              >
                <FormattedMessage id="Logout" />
              </span>
            </div>
          ),
        ]}
      />

      <SideNav
        openFromLeft={language === "en"}
        openFromRight={language === "ar"}
        showNav={showNavBrowse}
        onHideNav={() => setShowNavBrowse(false)}
        titleStyle={{ backgroundColor: "#FF5722" }}
        items={[
          <div className="d-flex align-items-center justify-content-between">
            <div className="mobile-logo d-flex align-items-center">
              <div className="glory-bold heading-4">
                {<FormattedMessage id="browse" />}
              </div>
            </div>
            <div>
              <img
                src={closeIcon}
                alt="closeIcon"
                onClick={() => {
                  setShowNavBrowse(false);
                }}
              />
            </div>
          </div>,
          <ul className="categories-ul">
            {categories_list.map((category, i) => {
              return (
                <div key={i}>
                  <li
                    className="inter-regular body-1 mb-2"
                    onClick={() => {
                      setCurrentCategory(category);
                    }}
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseExample-${i}`}
                    role="menuitem"
                    aria-controls="collapseExample"
                  >
                    <img src={category.photo}/> {category?.name}
                  </li>

                  {/* {category.subcategories.length > 0 && (
                    <div className="collapse mb-2" id={`collapseExample-${i}`}>
                      {category.subcategories?.map((subCat, i) => {
                        return (
                          <p
                            className="inter-regular body-1 mb-1 mx-4"
                            onClick={() => {
                              navigate("/search-results");
                            }}
                            key={i}
                          >
                            {subCat.name}
                          </p>
                        );
                      })}
                    </div>
                  )} */}
                </div>
              );
            })}
          </ul>,
        ]}
      />

      {/* Search modal */}
      <ModalComponentV2
        open={openSearchModal}
        onOpenModal={onOpenSearchModal}
        onCloseModal={onCloseSearchModal}
        className="search-modal"
        modalBody={
          <SearchModalContent 
            searchValue={searchValue}
            handleSearchChange={handleSearchChange} 
            onCloseModal={onCloseSearchModal}
            />
        }
      />
      {/* Browsing courses Modal */}
      <ModalComponentV2
        open={openBrowseModal}
        onOpenModal={onOpenModalBrowseModal}
        onCloseModal={onCloseModalBrowseModal}
        className="browse-modal"
        modalBody={
          <BrowseModalContent 
            handleCategoryChange={handleCategoryChange}
            handleCloseModal={onCloseModalBrowseModal}
            />
        }
      />
    </div>
  );
};

export default Header;
