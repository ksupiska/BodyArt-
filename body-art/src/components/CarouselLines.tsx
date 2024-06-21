import React from "react";
import Slider from "react-slick";
import '../css/carousel.css'
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";


const CarouselLines: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Референс 1" />
        </div>
        <div>
          <img src={image2} alt="Референс 2" />
        </div>
        <div>
          <img src={image3} alt="Референс 3" />
        </div>
        <div>
          <img src={image4} alt="Референс 4" />
        </div>
        <div>
          <img src={image5} alt="Референс 5" />
        </div>
        <div>
          <img src={image6} alt="Референс 6" />
        </div>
        <div>
          <img src={image7} alt="Референс 7" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselLines;
