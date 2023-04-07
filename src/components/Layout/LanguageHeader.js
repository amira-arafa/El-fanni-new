import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/actions/Lang";
import "./Header.scss";

const LangHeader = ({className}) => {
	const dispatch = useDispatch();
	// const [language, setLanguage] = useState(
		// localStorage.getItem("lang") === "ar" ? "ar" : "en"
		// );
		const [language, setLanguage] = useState("en"
			);
	useEffect(() => {
		// dispatch(setCurrentLang(language));
	}, [language, dispatch]);

	return (
		<div className={`${className} lang-header-container d-flex` }>
			<span onClick={() => setLanguage("ar")} className="cursor-pointer"><FormattedMessage id="arabic" /></span>
			<span onClick={() => setLanguage("en")} className="cursor-pointer"><FormattedMessage id="english" /></span>
			<span onClick={() => setLanguage("fr")} className="cursor-pointer"><FormattedMessage id="french" /></span>
		</div>
	);
};

export default LangHeader;
