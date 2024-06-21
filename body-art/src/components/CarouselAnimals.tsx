import React from "react";
import Slider from "react-slick";
import '../css/carousel.css'
import animal1 from "../images/animal1.jpg";
import animal2 from "../images/animal2.jpg";
import animal3 from "../images/animal3.jpg";
import animal4 from "../images/animal4.jpg";
import animal5 from "../images/animal5.jpg";
import animal6 from "../images/animal6.jpg";
import animal7 from "../images/animal7.jpg";


const CarouselAnimals: React.FC = () => {
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
          <img src={animal1} alt="Референс 1" />
        </div>
        <div>
          <img src={animal2} alt="Референс 2" />
        </div>
        <div>
          <img src={animal3} alt="Референс 3" />
        </div>
        <div>
          <img src={animal4} alt="Референс 4" />
        </div>
        <div>
          <img src={animal5} alt="Референс 5" />
        </div>
        <div>
          <img src={animal6} alt="Референс 6" />
        </div>
        <div>
          <img src={animal7} alt="Референс 7" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselAnimals;
