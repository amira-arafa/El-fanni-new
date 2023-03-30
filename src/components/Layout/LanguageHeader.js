import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/actions/Lang";
import "./Header.scss";

const LangHeader = () => {
	const dispatch = useDispatch();
	const [language, setLanguage] = useState(
    localStorage.getItem("lang") === "ar" ? "ar" : "en"
  );
	useEffect(() => {
		// dispatch(setCurrentLang(language));
	}, [language, dispatch]);

	return (
		<div className="lang-header-container d-flex">
			<span onClick={() => setLanguage("ar")} className="cursor-pointer"><FormattedMessage id="arabic" /></span>
			<span onClick={() => setLanguage("en")} className="cursor-pointer"><FormattedMessage id="english" /></span>
			<span onClick={() => setLanguage("fr")} className="cursor-pointer"><FormattedMessage id="franch" /></span>
		</div>
	);
};

export default LangHeader;
