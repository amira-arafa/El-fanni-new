import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import bookIcon from "../../../assets/imgs/icons/book-saved.png";
import langIcon from "../../../assets/imgs/icons/plain-language-square.png";
import chartIcon from "../../../assets/imgs/icons/chart-square.png";
import "./BrowseModal.scss";
import TechnicalCourses from "./Technical";
import LanguageCourses from "./Language";
import EntrepreneurshipCourses from "./Entrepreneurship";

const BrowseModalContent = ({ 
  handleCategoryChange,
  handleCloseModal,
}) => {
  const { home } = useSelector((state) => state);
  const { categories_list } = home;
  const navigate = useNavigate();
  let [content, setContent] = useState(<TechnicalCourses handleCloseModal={handleCloseModal} />)

  return (
    <div
      className="browse-modal-container"
      dir={`${localStorage.getItem("lang") === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="d-flex">
        <div className="col-sm-3 categories-container">
          <h3 className="gilory-bold heading-3 mb-4">
            <FormattedMessage id="browse" />
          </h3>
          <ul className="categories-ul">
              <li
                className="inter-regular body-1 mb-4 cursor-pointer"
                onClick={() => setContent(<TechnicalCourses handleCloseModal={handleCloseModal} />)}
              >
                <img src={bookIcon} alt="Book" className="me-2"/> <FormattedMessage id="technical" />
              </li>
              <li
                className="inter-regular body-1 mb-4 cursor-pointer"
                onClick={() => setContent(<LanguageCourses handleCloseModal={handleCloseModal} />)}
              >
                <img src={langIcon} alt="Book" className="me-2"/> <FormattedMessage id="language" />
              </li>
              <li
                className="inter-regular body-1 mb-4 cursor-pointer"
                onClick={() => setContent(<EntrepreneurshipCourses handleCloseModal={handleCloseModal} />)}
              >
                <img src={chartIcon} alt="Book" className="me-2"/> <FormattedMessage id="entrepreneurship" />
              </li>
          </ul>
        </div>
        {content}
      </div>
    </div>
  );
};

export default BrowseModalContent;
