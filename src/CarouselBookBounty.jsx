import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookBountyHomepageLight from "./Images/BookBountyImages/BookBountyHomepageLight.png";
import BookBountySignup from "./Images/BookBountyImages/BookBountySignup.png";
import BookBountyLogin from "./Images/BookBountyImages/BookBountyLogin.png";


export default function CarouselBookBounty() {

  let images = [
    BookBountyHomepageLight,
    BookBountySignup,
    BookBountyLogin,
];

  const settings = {
    dots: true,
    arrows:false,
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
      <div className="fade-in-10 mx-auto px-[5%] md:w-[80%]">
        <Slider {...settings}>
          {images?.map((image) => (
            <div className="">
              <img className="mx-auto" src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
