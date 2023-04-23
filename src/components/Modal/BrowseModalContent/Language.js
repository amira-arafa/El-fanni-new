import React from "react";
import "react-responsive-modal/styles.css";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import EnglandFlag from "../../../assets/imgs/icons/england-flag.png";
import ItalyFlag from "../../../assets/imgs/icons/italy-flag.png";
import GermanyFlag from "../../../assets/imgs/icons/germany-flag.png";
import "./BrowseModal.scss";

const LanguageCourses = ({ handleCloseModal }) => {
	const navigate = useNavigate();

	return (
		<>
			{/* Head */}
			<div className="col-sm-9 px-3">
				<div className="d-flex justify-content-between align-items-baseline">
					<div>
						<p className="mb-4 glory-semi-bold heading-1 head-2">
							<FormattedMessage id="langCourese" />
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
				<div className="browse-lang-content-body">
					<div className="mb-4">
						<div className="mb-4">
							<img src={ItalyFlag} alt="italy-flag" className="me-2"/>
							<FormattedMessage id="italian"/>
						</div>
						<div className="d-flex justify-content-between levels">
							<p><FormattedMessage id="levelA1"/></p>
							<p><FormattedMessage id="levelA2"/></p>
							<p><FormattedMessage id="levelB1"/></p>
						</div>
					</div>

					<div className="mb-4">
						<div className="mb-4">
							<img src={GermanyFlag} alt="germany-flag" className="me-2"/>
							<FormattedMessage id="german"/>
						</div>
						<div className="d-flex justify-content-between levels">
							<p><FormattedMessage id="levelA1"/></p>
							<p><FormattedMessage id="levelA2"/></p>
							<p><FormattedMessage id="levelB1"/></p>
						</div>
					</div>

					<div className="mb-4">
						<div className="mb-4">
							<img src={EnglandFlag} alt="england-flag" className="me-2"/>
							<FormattedMessage id="english"/>
						</div>
						<div className="d-flex justify-content-between levels">
							<p><FormattedMessage id="levelA1"/></p>
							<p><FormattedMessage id="levelA2"/></p>
							<p><FormattedMessage id="levelB1"/></p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LanguageCourses;
