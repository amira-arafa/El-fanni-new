import React, { useEffect, useRef, useState} from "react";
import { FormattedMessage } from "react-intl";
import lecturerImg from "../../../assets/imgs/lecturer.png";
import "./HomeOurLecturersSection.scss";

const HomeOurLecturersSection = () => {
  const [visible, setVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting)
      if(entry.intersectionRatio > 0) {
        setTimeout(() => {
          observer.unobserve(myRef.current);
          setVisible(false)
        }, 3000);
      }
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div ref={myRef} className="courses_home_lecturer_section">
      <div className={`d-flex gap-5 align-items-center title-wrapper ${(visible) && "title-transition"}`}>
        <div className="col-lg-2 col-xs-12 title">
          <p className="our m-0">
            <FormattedMessage id="Our" />
          </p>
          <span className="lecturer">
            <FormattedMessage id="Lecturers" />
          </span>
        </div>
        <div className="col-lg-8 col-xs-12">
          <FormattedMessage id="lecturers_title" />
        </div>
      </div>
      <div  className={`lecturers-wrapper d-flex gap-5 ${(visible) && "body-transition"}`} >
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
