import React from "react";
import "react-responsive-modal/styles.css";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import ForwardSlash from "../../../assets/imgs/icons/forwardslash.png";
import Backslash from "../../../assets/imgs/icons/backslash.png";
import "./BrowseModal.scss";

const EntrepreneurshipCourses = ({ handleCloseModal }) => {
	const navigate = useNavigate();

	return (
		<>
			{/* Head */}
			<div className="col-sm-9 px-3">
				<div className="d-flex justify-content-between align-items-baseline">
					<div>
						<p className="mb-4 glory-semi-bold heading-1 head-2">
							<FormattedMessage id="entrepreneurCourese" />
						</p>
					</div>
					<div className="d-flex">
						<Button
							className="mx-2 close-btn-browse inter-semi-bold body-1"
							text={<FormattedMessage id="close" />}
							onClick={() => handleCloseModal()}
						></Button>
					</div>
				</div>
				{/* Body */}
				<div className="browse-content-body">
					<div className="mb-4">
						<div className="d-flex mb-3" style={{alignItems: "flex-start"}}>
							<img src={Backslash} alt="slash" className="me-2"/>
							<p><FormattedMessage id="EntrepreneurshipP1"/></p>
						</div>
						<div className="d-flex mb-3" style={{alignItems: "flex-start"}}>
							<img src={ForwardSlash} alt="slash" className="me-2"/>
							<p><FormattedMessage id="EntrepreneurshipP2"/></p>
						</div>
						<div className="d-flex mb-3" style={{alignItems: "flex-start"}}>
							<img src={Backslash} alt="slash" className="me-2"/>
							<p><FormattedMessage id="EntrepreneurshipP3"/></p>
						</div>
						<div className="d-flex mb-3" style={{alignItems: "flex-start"}}>
							<img src={ForwardSlash} alt="slash" className="me-2"/>
							<p><FormattedMessage id="EntrepreneurshipP4"/></p>
						</div>
						<div className="d-flex mb-3" style={{alignItems: "flex-start"}}>
							<img src={Backslash} alt="slash" className="me-2"/>
							<p><FormattedMessage id="EntrepreneurshipP5"/></p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EntrepreneurshipCourses;
