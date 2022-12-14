import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import arrowRight from "../../assets/imgs/icons/arrow-right-white.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import star from "../../assets/imgs/icons/star.png";
import star2 from "../../assets/imgs/icons/vector.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import "./Cart.scss";

const Cart = () => {
  const intl = useIntl();
  return (
    <>
      <Header></Header>
      <div className="cart-container">
        <div className="row">
          <div className="my-4">
            <p className="glory-semi-bold heading-4 cart-header mb-1">
              <FormattedMessage id="Cart" />
            </p>
            <p className="inter-regular label-1 cart-subheader">
              <FormattedMessage id="cartSubHeaders" />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 pe-3 cart-results-wrapper">
            <div className="search-results-section">
              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4">
                  <img src={cutMetalImg} alt="course-img"></img>
                </div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">
                    Cutting metals and how we use the devices
                  </p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">
                      Mohammed Karim
                    </span>
                    <span className="inter-regular label-1 search-result-date">
                      Jan 2020
                    </span>
                    <span className="inter-regular label-1 search-result-students-number">
                      400,150 student
                    </span>
                  </div>
                  <div className="ratings-container-cart">
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
                </div>
              </div>

              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4">
                  <img src={cutMetalImg} alt="course-img"></img>
                </div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">
                    Cutting metals and how we use the devices
                  </p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">
                      Mohammed Karim
                    </span>
                    <span className="inter-regular label-1 search-result-date">
                      Jan 2020
                    </span>
                    <span className="inter-regular label-1 search-result-students-number">
                      400,150 student
                    </span>
                  </div>
                  <div className="ratings-container-cart">
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
                </div>
              </div>

              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4">
                  <img src={cutMetalImg} alt="course-img"></img>
                </div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">
                    Cutting metals and how we use the devices
                  </p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">
                      Mohammed Karim
                    </span>
                    <span className="inter-regular label-1 search-result-date">
                      Jan 2020
                    </span>
                    <span className="inter-regular label-1 search-result-students-number">
                      400,150 student
                    </span>
                  </div>
                  <div  className="ratings-container-cart">
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
                </div>
              </div>

              <div className="d-flex course-results-wrapper mb-5">
                <div className="col-sm-4">
                  <img src={cutMetalImg} alt="course-img"></img>
                </div>
                <div className="col-sm-8">
                  <p className="inter-semi-bold heading-3">
                    Cutting metals and how we use the devices
                  </p>
                  <div className="search-results-courses-data">
                    <span className="inter-regular label-1">
                      Mohammed Karim
                    </span>
                    <span className="inter-regular label-1 search-result-date">
                      Jan 2020
                    </span>
                    <span className="inter-regular label-1 search-result-students-number">
                      400,150 student
                    </span>
                  </div>
                  <div  className="ratings-container-cart">
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 search-results-section total-cart ">
            <div className="d-flex align-items-center justify-content-between">
                <div className="inter-semi-bold body-1"><FormattedMessage id="total"/></div>
                <div className="glory-bold heading-3 total-price"> 1024 EGP</div>
            </div>
            <div className="hr"></div>
            <Button
              afterIcon={arrowRight}
              text={intl.formatMessage({ id: "continue" })}
              className="regular-btn inter-semi-bold body-1 w-100"
            ></Button>
          </div>
          <div className="col-sm-4 search-results-section total-cart-mobile">
            <Button
              text={<div className="d-flex justify-content-between align-items-center">
                <div><p>{intl.formatMessage({ id: "CheckoutAll" })}</p></div>
                <div>
                    <p className="label-1">{intl.formatMessage({ id: "total" })}</p>
                    <p>1200 EGP</p>
                </div>
              </div>}
              className="regular-btn inter-semi-bold heading-3 w-100"
            ></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
