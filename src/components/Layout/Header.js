import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import logoMobile from "../../assets/imgs/logoMobile.png";
import logo from "../../assets/imgs/logo.png";
import language from "../../assets/imgs/icons/language.png";
import loginIcon from "../../assets/imgs/icons/loginIcon.png";
import search from "../../assets/imgs/icons/search-normal.png";
import category from "../../assets/imgs/icons/category.png";
import SideNav from "react-simple-sidenav";
import menu from "../../assets/imgs/icons/menu.png";
import closeIcon from "../../assets/imgs/icons/close-circle-grey.png";
import cart from "../../assets/imgs/icons/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../store/actions/auth";
import { getCartList, getCategories } from "../../store/actions/home";
import { SUCESS_LOG_OUT } from "../../store/types/auth";
import { STORE_SEARCH_QUERY } from "../../store/types/home";
import Input from "../../components/Input/Input";
import Button from "../Button/Button";
import ModalComponent from "../Modal/Modal";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [showNav, setShowNav] = useState(false);
  const [showNavBrowse, setShowNavBrowse] = useState(false);

  const [openBrowseModal, setOpenBrowseModal] = useState(false);
  const onOpenModalBrowseModal = () => setOpenBrowseModal(true);
  const onCloseModalBrowseModal = () => setOpenBrowseModal(false);

  const navigate = useNavigate();
  const intl = useIntl();
  const { auth, home } = useSelector((state) => state);
  const { cart_list, categories_list } = home;
  const dispatch = useDispatch();
  const { token, user_data } = auth;
  const [searchValue, setSearchValue] = useState("");
  const [currentCategory, setCurrentCategory] = useState(0);

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
  }, [auth.sucess_logout]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    localStorage.getItem("token") && dispatch(getCartList());
  }, []);

  const handleLogout = () => {
    dispatch(Logout());
  };

  const redirectTosearchPage = () => {
    navigate(`/search-results/${searchValue}`);
    onCloseModal();
    dispatch({
      type: STORE_SEARCH_QUERY,
      payload: searchValue,
    });
  };

  return (
    <div className="header-container d-flex">
      <div className="col-sm-8">
        <div className="d-flex align-items-center">
          <div className=" col-sm-5 col-md-3 d-flex align-items-center">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img alt="logo" src={logo} width="60px" height="60px"></img>
            </div>
            <div className="text-white glory-bold heading-3 mx-2">
              <FormattedMessage id="ElFanni" />
            </div>
          </div>
          <div className="col-sm-7 col-md-9 browse-btn-container">
            <ModalComponent
              open={openBrowseModal}
              onOpenModal={onOpenModalBrowseModal}
              onCloseModal={onCloseModalBrowseModal}
              className="browse-modal"
              children={
                <button className="browse-btn body-1">
                  <FormattedMessage id="browse" />
                </button>
              }
              modalBody={
                <div className="browse-modal-container">
                  <div className="d-flex">
                    <div className="col-sm-4 categories-container">
                      <h3 className="gilory-bold heading-3 mb-3">
                        <FormattedMessage id="browse" />
                      </h3>
                      <ul className="categories-ul">
                        {categories_list.map((category) => {
                          return (
                            <li
                              className="inter-regular body-1 mb-2"
                              onClick={() => {
                                setCurrentCategory(category);
                              }}
                            >
                              {category?.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {categories_list && (
                      <div className="col-sm-8 px-3">
                        <div className="d-flex justify-content-between align-items-baseline">
                          <div className="col-sm-5">
                            <p className="mb-3 glory-semi-bold btnColor heading-1">
                              {currentCategory
                                ? currentCategory.name
                                : categories_list[0]?.name}
                            </p>
                          </div>
                          <div className="col-sm-7">
                            <Button
                              className="mx-2 close-btn-browse inter-semi-bold body-1"
                              text={<FormattedMessage id="close" />}
                              onClick={() => {
                                onCloseModalBrowseModal();
                              }}
                            ></Button>
                            <Button
                              className="show-all-btn-browse inter-semi-bold body-1"
                              text={<FormattedMessage id="showall" />}
                              onClick={() => {
                                navigate(`/search-results`);
                              }}
                            ></Button>
                          </div>
                        </div>
                        {currentCategory
                          ? currentCategory.subcategories?.map((subCat) => {
                              return (
                                <p className="inter-regular label-1 mb-1 cursor-pointer" onClick={()=>{navigate("/search-results")}}>
                                  {subCat.name}
                                </p>
                              );
                            })
                          : categories_list[0]?.subcategories.map((subCat) => {
                              return (
                                <p className="inter-regular label-1 mb-1 cursor-pointer" onClick={()=>{navigate("/search-results")}}>
                                  {subCat.name}
                                </p>
                              );
                            })}
                      </div>
                    )}
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="col-sm-4 is-mobile justify-content-end">
        <div className="col-sm-3 d-flex ">
          <div>
            <img alt="language" src={language} width="22px" height="22px"></img>
          </div>
          <div className="d-flex align-items-center cursor-pointer">
            <img
              alt="cart"
              src={cart}
              width="22px"
              height="22px"
              onClick={() => navigate("/cart")}
              className="ms-4"
            ></img>
            <span className="cart-number">{cart_list.length}</span>
          </div>
        </div>
        <div className="col-sm-3">
          <div className=" d-flex" onClick={() => navigate("/about-us")}>
            <div>
              <span className="inter-semi-bold body-1 cursor-pointer">
                <FormattedMessage id="aboutUs" />
              </span>
            </div>
          </div>
        </div>
        <ModalComponent
          open={open}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          className="header-modal"
          wrapperClass="col-sm-3"
          children={
            <div>
              <div className="d-flex cursor-pointer">
                <div>
                  <span className="inter-semi-bold body-1">
                    <FormattedMessage id="search" />
                  </span>
                </div>
                <div>
                  <img
                    alt="search"
                    src={search}
                    width="20px"
                    height="20px"
                    className="m-x-1"
                  ></img>
                </div>
              </div>
            </div>
          }
          modalBody={
            <div className="d-flex">
              <div className="col-sm-10">
                <Input
                  type="text"
                  className="search-input-overlay"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={intl.formatMessage({ id: "searchHere" })}
                  icon={
                    <img
                      alt="search-icon-overlay"
                      src={search}
                      width="20"
                      height="20"
                      className="cursor-pointer"
                      onClick={() => redirectTosearchPage()}
                    />
                  }
                />
              </div>
              <div className="col-sm-2">
                <Button
                  text={intl.formatMessage({ id: "search" })}
                  className="search-modal-btn inter-semi-bold label-1 mx-3"
                  onClick={() => redirectTosearchPage()}
                ></Button>
              </div>
            </div>
          }
        />
        <div className="col-sm-3 cursor-pointer">
          {localStorage.getItem("user-data") ? (
            <div className="d-flex justify-content-center">
              <div className="dropdown ddp-btn ">
                <div
                  className="dropdown-toggle w-100 course-content-btn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="logout-user"
                    alt="user-img"
                    src={user_data.photo}
                    width="40"
                    height="40"
                  ></img>
                </div>
                <ul
                  className="dropdown-menu w-100"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={() => navigate("/profile")}>
                    <a className="dropdown-item">
                      <FormattedMessage id="Profile" />
                    </a>
                  </li>
                  <li onClick={() => handleLogout()}>
                    <a className="dropdown-item">
                      <FormattedMessage id="Logout" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className=" d-flex" onClick={() => navigate("/sign-in")}>
              <div>
                <span className="inter-semi-bold body-1">
                  <FormattedMessage id="signIn" />
                </span>
              </div>
              <div>
                <img
                  alt="signIn"
                  src={loginIcon}
                  width="20px"
                  height="20px"
                  className="m-x-1"
                ></img>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-sm-4 mobile-icons">
        <div className="d-flex">
          <div className="col-sm-4">
          <div className="dropdown ddp-btn ">
                <div
                  className="dropdown-toggle w-100 "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                      <img
              alt="search"
              src={search}
              width="20px"
              height="20px"
              className="m-x-1"
              
            ></img>
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
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
        openFromLeft={true}
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        titleStyle={{ backgroundColor: "#FF5722" }}
        items={[
          <div className="d-flex align-items-center justify-content-between">
            <div className="mobile-logo d-flex align-items-center">
              <div>
                <img alt="logo" src={logoMobile} width="50" height="50"></img>
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
          <div onClick={() => navigate("/about-us")}>
            <span className="inter-regular body-1">
              <FormattedMessage id="aboutUs" />
            </span>
          </div>,
          <div  onClick={() => navigate("/cart")}>
            <span className="inter-regular body-1">
              <FormattedMessage id="Cart" />
            </span>
          </div>,
          <div>
            <span className="inter-regular body-1">
              <FormattedMessage id="Language" />
            </span>
          </div>,
          !localStorage.getItem("user-data") ? (
            <div  onClick={() => navigate("/sign-in")}>
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
            <div>
            </div>
          ) : (
            <div>
            <span
              className="inter-regular body-1"
              onClick={() => handleLogout()}
            >
              <FormattedMessage id="Logout" />
            </span>
          </div>
          )
        ]}
      />

<SideNav
        openFromLeft={true}
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
             {categories_list.map((category , i) => {
               return (<div>

                <li
                   className="inter-regular body-1 mb-2"
                   onClick={() => {
                     setCurrentCategory(category);
                   }}
                   data-bs-toggle="collapse"
                   data-bs-target={`#collapseExample-${i}`}
                   aria-expanded="false"
                   aria-controls="collapseExample"
                 >
                   {category?.name}
                 </li>
                  {category.subcategories.length>0 && <div className="collapse mb-2"  id={`collapseExample-${i}`}>
                  {category.subcategories?.map((subCat) => {
                              return (
                                <p className="inter-regular body-1 mb-1 mx-4" onClick={()=>{navigate("/search-results")}}>
                                  {subCat.name}
                                </p>
                              );
                            })}
                  </div>}
               </div>
               );
             })}
           </ul>
    ]}
      />
    </div>
  );
};

export default Header;
