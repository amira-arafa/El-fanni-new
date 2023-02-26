import React from "react";
import { FormattedMessage } from "react-intl";
import CarouselComponent from "../../../components/Carousel/Carousel";
import CoursesHomeCard from "../../../components/CoursesHomeCard/CoursesHomeCard";
import img1 from "../../../assets/imgs/courses1.png";
import img2 from "../../../assets/imgs/courses2.png";
import img3 from "../../../assets/imgs/courses3.png";
import img4 from "../../../assets/imgs/courses4.png";
import img5 from "../../../assets/imgs/courses5.png";
import img6 from "../../../assets/imgs/courses6.png";
import img7 from "../../../assets/imgs/courses7.png";
import img8 from "../../../assets/imgs/courses8.png";
import "./HomeOurCoursesSection.scss";

const HomeOurCoursesSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1250 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1250, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="courses_home_section">
      <p className="title">
        <FormattedMessage id="Our_Courses" />
      </p>
      <div className="mb-4">
        <CarouselComponent
          responsive={responsive}
          autoPlay={true}
          interval={2600}
          infiniteLoop={true}
          infinite={true}
        >
          <CoursesHomeCard imgSrc={img1} courseTitle="Agriculture" />
          <CoursesHomeCard imgSrc={img2} courseTitle="Electronics" />
          <CoursesHomeCard imgSrc={img3} courseTitle="Construction" />
          <CoursesHomeCard imgSrc={img4} courseTitle="Electricity" />
          <CoursesHomeCard imgSrc={img5} courseTitle="Carpentary" />
          <CoursesHomeCard imgSrc={img6} courseTitle="Restaurant Managment" />
          <CoursesHomeCard imgSrc={img7} courseTitle="AutoCad" />
          <CoursesHomeCard imgSrc={img8} courseTitle="Quality Control" />
        </CarouselComponent>
      </div>
      <div>
        <CarouselComponent
          responsive={responsive}
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          infinite={true}
        >
          <CoursesHomeCard imgSrc={img5} courseTitle="Carpentary" />
          <CoursesHomeCard imgSrc={img6} courseTitle="Restaurant Managment" />
          <CoursesHomeCard imgSrc={img7} courseTitle="AutoCad" />
          <CoursesHomeCard imgSrc={img8} courseTitle="Quality Control" />
          <CoursesHomeCard imgSrc={img1} courseTitle="Agriculture" />
          <CoursesHomeCard imgSrc={img2} courseTitle="Electronics" />
          <CoursesHomeCard imgSrc={img3} courseTitle="Construction" />
          <CoursesHomeCard imgSrc={img4} courseTitle="Electricity" />
        </CarouselComponent>
      </div>
    </div>
  );
};

export default HomeOurCoursesSection;
