import React from "react";
import "react-responsive-modal/styles.css";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import "./BrowseModal.scss";

const TechnicalCourses = ({ handleCloseModal }) => {
	const { home } = useSelector((state) => state);
	const { categories_list } = home;
	const navigate = useNavigate();

	return (
		<>
			{categories_list && (
				<div className="col-sm-9 px-3">
					<div className="d-flex justify-content-between align-items-baseline">
						<div>
							<p className="mb-4 glory-semi-bold heading-1 head-2">
								<FormattedMessage id="techCourese" />
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
					<div className="browse-categories-wrapper">
						{categories_list.map(
							(cat, i) => {
								return (
									<p
										className="inter-regular label-1 mb-3 cursor-pointer"
										key={i}
										onClick={() => {
											handleCloseModal()
											navigate("/search-results");
										}}
									>
										<img src={cat.photo} /> {cat.name}
									</p>
								);
							}
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default TechnicalCourses;
