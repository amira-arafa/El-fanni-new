import React from "react";
import EmptyImg from "../../assets/imgs/empty_box.png";
import Button from "../Button/Button";
import "./EmptyState.scss";

const EmptyState = ({ text, btnText, className, subText, btnIcon }) => {
  return (
    <>
      <div
        className={`${className} low-line-height d-flex align-items-center justify-content-center flex-column`}
      >
        <img src={EmptyImg} width="200" height="200" className="mb-4" />
        <div className="heading-4 btnColor glory-semi-bold mb-3">{text}</div>
        {subText && (
          <div className="inter-regular body-1 subText mb-3">{subText}</div>
        )}
        <div>
          {btnText && (
            <Button
              icon={btnIcon}
              text={btnText}
              className="w-100 empty-state-btn inter-semi-bold body-1"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EmptyState;
