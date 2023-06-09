import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="md:w-full w-80 mx-auto mb-8">
        <Slider {...settings}>
            <div className="text-center"><h3>1</h3></div>
            <div className="text-center"><h3>2</h3></div>
            <div className="text-center"><h3>3</h3></div>
        </Slider>
      </div>
    </>
  );
}
