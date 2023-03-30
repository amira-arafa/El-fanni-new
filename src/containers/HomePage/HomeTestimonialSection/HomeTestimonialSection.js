import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import quoteUpIcon from "../../../assets/imgs/icons/quote-down.png";
import quoteDownIcon from "../../../assets/imgs/icons/quote-up.png";
import teacher4 from "../../../assets/imgs/teacher4.png";
import "./HomeTestimonialSection.scss";

const HomeTestimonialSection = () => {
  const [visible, setVisible] = useState(false);
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
      if (entry.intersectionRatio > 0) {
        setTimeout(() => {
          observer.unobserve(myRef.current);
          setVisible(false);
        }, 3000);
      }
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div ref={myRef} className="home-testimonial-section">
      <div className={visible ? "title-transition" : ""}>
        <p className="title">
          <FormattedMessage id="Testimonials" />
        </p>
        <p className="sub-title">
          <FormattedMessage id="testmonials_sub_text" />
        </p>
      </div>

      <div
        className={`lectures-scroll-container ${visible ?  "body-transition" : ""}`}
      >
        <div className="d-flex lecturer-list mt-3">
          <div className="our-students-card">
            <div className="mb-2">
              <img src={quoteUpIcon} alt="quoteUpIcon"></img>
            </div>
            <div className="students-text mb-2 inter-regular body-1">
              The Mechanical course from ElFANNI was fantastic! The instructors
              were knowledgeable, and the hands-on approach made learning easy.
              Thanks to this course, I feel confident in pursuing a career in
              agriculture. Highly recommended!
            </div>
            <div className="text-end">
              <img src={quoteDownIcon} alt="quoteDonwIcon"></img>
            </div>
            <div className="d-flex student-info">
              <div className="col-sm-2">
                <img src={teacher4} alt="student-img" />
              </div>
              <div className="col-sm-10">
                <div className="student-name inter-semi-bold body-1">
                  John Doe
                </div>
                <div className="student-school label-1 inter-regular">
                  Student at Alexandria Technical School{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="our-students-card">
            <div className="mb-2">
              <img src={quoteUpIcon} alt="quoteUpIcon"></img>
            </div>
            <div className="students-text mb-2 inter-regular body-1">
              The Mechanical course from ElFANNI was fantastic! The instructors
              were knowledgeable, and the hands-on approach made learning easy.
              Thanks to this course, I feel confident in pursuing a career in
              agriculture. Highly recommended!
            </div>
            <div className="text-end">
              <img src={quoteDownIcon} alt="quoteDonwIcon"></img>
            </div>
            <div className="d-flex student-info">
              <div className="col-sm-2">
                <img src={teacher4} alt="student-img" />
              </div>
              <div className="col-sm-10">
                <div className="student-name inter-semi-bold body-1">
                  John Doe
                </div>
                <div className="student-school label-1 inter-regular">
                  Student at Alexandria Technical School{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="our-students-card">
            <div className="mb-2">
              <img src={quoteUpIcon} alt="quoteUpIcon"></img>
            </div>
            <div className="students-text mb-2 inter-regular body-1">
              The Mechanical course from ElFANNI was fantastic! The instructors
              were knowledgeable, and the hands-on approach made learning easy.
              Thanks to this course, I feel confident in pursuing a career in
              agriculture. Highly recommended!
            </div>
            <div className="text-end">
              <img src={quoteDownIcon} alt="quoteDonwIcon"></img>
            </div>
            <div className="d-flex student-info">
              <div className="col-sm-2">
                <img src={teacher4} alt="student-img" />
              </div>
              <div className="col-sm-10">
                <div className="student-name inter-semi-bold body-1">
                  John Doe
                </div>
                <div className="student-school label-1 inter-regular">
                  Student at Alexandria Technical School{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonialSection;
