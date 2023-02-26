import React from "react";
import { FormattedMessage } from "react-intl";
import lecturerImg from "../../../assets/imgs/lecturer.png";
import "./HomeOurLecturersSection.scss";

const HomeOurLecturersSection = () => {
  return (
    <div className="courses_home_lecturer_section">
      <div className="d-flex gap-5 align-items-center title-wrapper">
        <div className="col-sm-2 title">
          <p className="our m-0">
            <FormattedMessage id="Our" />
          </p>
          <span className="lecturer">
            <FormattedMessage id="Lecturers" />
          </span>
        </div>
        <div className="col-sm-10">
          <FormattedMessage id="lecturers_title" />
        </div>
      </div>
      <div className="lecturers-wrapper d-flex gap-2">
        <div className="lecturer">
          <img src={lecturerImg} alt="lecturer-Img" />
          <p className="name">Eng. Mostafa Khalifa</p>
          <p className="job">Operation Engineer at SAP</p>
        </div>
        <div className="lecturer">
          <img src={lecturerImg} alt="lecturer-Img" />
          <p className="name">Fredrieco Castengoli</p>
          <p className="job">Mechanic at Ford</p>
        </div>
        <div className="lecturer">
          <img src={lecturerImg} alt="lecturer-Img" />
          <p className="name">Mohamed Ahmed</p>
          <p className="job">Electrician at Eni</p>
        </div>
        <div className="lecturer">
          <img src={lecturerImg} alt="lecturer-Img" />
          <p className="name">Karim Yassin</p>
          <p className="job">Electrical Engineer at Schnider</p>
        </div>
      </div>
    </div>
  );
};

export default HomeOurLecturersSection;
