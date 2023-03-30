import React from "react";
import "react-responsive-modal/styles.css";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const BrowseModalContent = ({
  currentCategory,
  handleCategoryChange,
  handleCloseModal,
}) => {
  const { home } = useSelector((state) => state);
  const { categories_list } = home;
  const navigate = useNavigate();

  return (
    <div
      className="browse-modal-container"
      dir={`${localStorage.getItem("lang") === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="d-flex">
        <div className="col-sm-4 categories-container">
          <h3 className="gilory-bold heading-3 mb-4">
            <FormattedMessage id="browse" />
          </h3>
          <ul className="categories-ul">
            {categories_list.map((category, i) => {
              return (
                <li
                  className="inter-regular body-1 mb-4"
                  onClick={() => handleCategoryChange(category)}
                  key={i}
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
                <p className="mb-4 glory-semi-bold btnColor heading-1">
                  {currentCategory
                    ? currentCategory.name
                    : categories_list[0]?.name}
                </p>
              </div>
              <div className="col-sm-7 d-flex justify-content-between">
                <Button
                  className="mx-2 close-btn-browse inter-semi-bold body-1"
                  text={<FormattedMessage id="close" />}
                  onClick={() => handleCloseModal()}
                ></Button>
                <Button
                  className="show-all-btn-browse inter-semi-bold body-1"
                  text={<FormattedMessage id="showall" />}
                  onClick={() => {
                    handleCloseModal()
                    navigate(`/search-results`);
                  }}
                ></Button>
              </div>
            </div>
            <div className="subcategories-wrapper">
              {currentCategory
                ? currentCategory.subcategories?.map(
                  (subCat, i) => {
                    return (
                      <p
                        className="inter-regular label-1 mb-3 cursor-pointer"
                        onClick={() => {
                          handleCloseModal()
                          navigate("/search-results");
                        }}
                        key={i}
                      >
                        {subCat.name}
                      </p>
                    );
                  }
                )
                : categories_list[0]?.subcategories.map(
                  (subCat, i) => {
                    return (
                      <p
                        className="inter-regular label-1 mb-3 cursor-pointer"
                        onClick={() => {
                          handleCloseModal()
                          navigate("/search-results");
                        }}
                        key={i}
                      >
                        {subCat.name}
                      </p>
                    );
                  }
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseModalContent;
