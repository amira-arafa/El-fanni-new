import React from "react";
import HomeMainSlide from "./HomeMainSlide";
import CarouselComponent from "../../../components/Carousel/Carousel";
import "./HomeMainSection.scss";

const HomeMainSection = () => {
  const responsive = {
    allSizesDesktop: {
      breakpoint: { max: 4000, min: 375 },
      items: 1,
    },
  };
  return (
    <CarouselComponent
      responsive={responsive}
      interval={3500}
      className="main-carousel"
      customTransition="all .5"
      infinite={true}
      autoPlay={true}
      showDots={true}
      removeArrowOnDeviceType={["allSizesDesktop"]}
    >
      <HomeMainSlide className="first-home-slide" />
      <HomeMainSlide className="second-home-slide" />
      <HomeMainSlide className="third-home-slide" />
      <HomeMainSlide className="fourth-home-slide" />
      <HomeMainSlide className="fifth-home-slide" />
    </CarouselComponent>
  );
};

export default HomeMainSection;
