import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import arrowRight from "../../assets/imgs/icons/arrow-right-white.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import { Rating } from "react-simple-star-rating";
import moreIcon from "../../assets/imgs/icons/moregrey.png";
import deleteIcon from "../../assets/imgs/icons/DeleteCart.png";
import trashIcon from "../../assets/imgs/icons/trash.png";
import cutMetalImg from "../../assets/imgs/cutting_metals.png";
import { getCartList, deleteCourse } from "../../store/actions/home";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "../../components/Modal/Modal";
import EmptyState from "../../components/EmptyStateComponent/EmptyState";
import moment from "moment";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state);
  const { cart_list, total_payment } = home;
  const [open, setOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && dispatch(getCartList());
  }, []);

  const handleRemoveFromCart = (result) => {
    setCurrentCourse(result);
    onOpenModal();
  };
  const handleDeleteCourse = () => {
    dispatch(
      deleteCourse(currentCourse._id, {
        title: currentCourse.title,
        lectureId: currentCourse._id,
      })
    );
    onCloseModal();
  };

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
          <div className="col-sm-8 pe-5 cart-results-wrapper">
            <div className="search-results-section">
              {cart_list.length > 0 ?
                cart_list.map((result) => (
                  <div className="d-flex course-results-wrapper cursor-pointer mb-5">
                    <div className="col-sm-4 me-3"  onClick={() => {
                        navigate(`/course/${result._id}`);
                      }}>
                      <img src={cutMetalImg} alt="course-img"></img>
                    </div>
                    <div className="col-sm-6" onClick={() => {
                      navigate(`/course/${result._id}`);
                    }}>
                      <p className="inter-semi-bold heading-3 mb-2">
                        {result.title}
                      </p>
                      <div className="search-results-courses-data mb-2">
                        <span className="inter-regular label-1">
                          {result.instructors.map(
                            (instructor) => instructor.fullName
                          ).join(', ')}
                        </span>
                        <span className="inter-regular label-1 search-result-date">
                          {moment(result.releaseDate).format("LL")}
                        </span>
                        <span className="inter-regular label-1 search-result-students-number">
                          {result.studentsNo} Student
                        </span>
                      </div>
                      <div className="d-flex desktop-rating">
                        <div>
                          <Rating
                            readonly={true}
                            initialValue={result.avgRating}
                            allowFraction={true}
                          />
                          <span className="top-courses-rating inter-regular label-1 m-x-1">
                            <sub>({result.reviewsNo})</sub>
                          </span>
                        </div>
                        <div>
                          <span className="inter-regular label-1 search-result-students-number levels-color">
                            {result.level}
                          </span>
                        </div>
                      </div>
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
                            onClick={() => handleRemoveFromCart(result)}
                            className="cursor-pointer"
                          >
                            <a className="dropdown-item">
                              <FormattedMessage id="removeFromCart" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      onClick={() => handleRemoveFromCart(result)}
                      className="col-sm-2 text-center cart-mobile-delete"
                    >
                      <img src={trashIcon} alt="trash-icon" />
                    </div>
                  </div>
                )) : 
                <div><EmptyState text={<FormattedMessage id="cartEmpty"/>}/></div>}
            </div>
          </div>
          <div className="col-sm-4 search-results-section total-cart ">
            <div className="d-flex align-items-center justify-content-between">
              <div className="inter-semi-bold body-1">
                <FormattedMessage id="total" />
              </div>
              <div className="glory-bold heading-3 total-price">
                {total_payment} EGP
              </div>
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
              text={
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p>{intl.formatMessage({ id: "CheckoutAll" })}</p>
                  </div>
                  <div className="price-wrapper">
                    <p className="label-1">
                      {intl.formatMessage({ id: "total" })}
                    </p>
                    <p>{total_payment} EGP</p>
                  </div>
                </div>
              }
              className="regular-btn inter-semi-bold heading-3 w-100 checkout-btn-mobile"
            ></Button>
          </div>
        </div>
      </div>
      <ModalComponent
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        className="cart-modal"
        modalBody={
          <div className="row align-items-center">
            <div className="col-sm-2">
              <img src={deleteIcon} alt="delete-icon" />
            </div>
            <div className="col-sm-10">
              <p className="px-2 mb-1 delete-course-warning">
                <FormattedMessage id="deleteCourseTitle" />
              </p>
              <p className="px-2 mb-1 delete-course-text">
                <FormattedMessage id="deleteMsgCourse" />
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <div onClick={() => onCloseModal()}>
                {" "}
                <Button
                  className="mx-2 keep-btn"
                  text={<FormattedMessage id="NoKeep" />}
                >
                  {" "}
                </Button>
              </div>
              <div onClick={() => handleDeleteCourse()}>
                {" "}
                <Button
                  className="yes-remove-btn"
                  text={<FormattedMessage id="yesRemove" />}
                ></Button>
              </div>
            </div>
          </div>
        }
      />
      <Footer></Footer>
    </>
  );
};

export default Cart;
