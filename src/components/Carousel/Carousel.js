import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({
  autoPlay,
  interval,
  children,
  responsive,
  infinite,
  slidesToSlide,
  showDots,
  removeArrowOnDeviceType,
  className,
  customTransition,
}) => {
  return (
    <Carousel
      infinite={infinite}
      responsive={responsive}
      autoPlay={autoPlay}
      autoPlaySpeed={interval}
      slidesToSlide={slidesToSlide}
      showDots={showDots}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      className={className}
      customTransition={customTransition}
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
