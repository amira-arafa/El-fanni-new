import React from "react";
import "react-responsive-modal/styles.css";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { STORE_SEARCH_QUERY } from "../../store/types/home";
import Input from "../Input/Input";
import search from "../../assets/imgs/icons/Group 510.png";

const SearchModalContent = ({
  handleSearchChange,
  searchValue,
  onCloseModal,
}) => {
  const navigate = useNavigate();
  const intl = useIntl();
  const dispatch = useDispatch();

  const redirectTosearchPage = () => {
    navigate(`/search-results/${searchValue}`);
    onCloseModal();
    dispatch({
      type: STORE_SEARCH_QUERY,
      payload: searchValue,
    });
  };

  return (
    <div
      className="d-flex"
      dir={`${localStorage.getItem("lang") === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="col-sm-10">
        <Input
          type="text"
          className="search-input-overlay"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={intl.formatMessage({ id: "searchHere" })}
          onKeyPress={(event) => {
            if (event.key === "Enter") redirectTosearchPage();
          }}
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
  );
};

export default SearchModalContent;
