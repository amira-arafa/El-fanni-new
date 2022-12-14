import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({ autoPlay, interval, children, responsive, infinite, slidesToSlide }) => {
  return (
    <Carousel
      infinite={infinite}
      responsive={responsive}
      autoPlay={autoPlay}
      autoPlaySpeed={interval}
      slidesToSlide={slidesToSlide}
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;
