import React from "react";
import { FormattedMessage } from "react-intl";
import partner1 from "../../../assets/imgs/icons/partner1.png";
import partner2 from "../../../assets/imgs/icons/partner2.png";
import partner3 from "../../../assets/imgs/icons/partner3.png";
import partner4 from "../../../assets/imgs/icons/partner4.png";
import "./HomeTrustedPartnersSection.scss";

const HomeTrustedPartnersSection = () => {
  return (
    <div className="partners-section-home glory-semi-bold heading-4">
      <p className="mb-1 btnColor heading-5">
        <FormattedMessage id="trustedPartners" />
      </p>
      <div className="partners-container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="partner-img-container">
            <img alt="partner" src={partner1}></img>
          </div>
          <div className="partner-img-container">
            <img alt="partner" src={partner2}></img>
          </div>
          <div className="partner-img-container">
            <img alt="partner" src={partner3}></img>
          </div>
          <div className="partner-img-container">
            <img alt="partner" src={partner4}></img>
          </div>
          <div className="partner-img-container">
            <img alt="partner" src={partner2}></img>
          </div>
          <div className="partner-img-container">
            <img alt="partner" src={partner1}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTrustedPartnersSection;
