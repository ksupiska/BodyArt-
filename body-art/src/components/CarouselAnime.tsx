import React from "react";
import Slider from "react-slick";
import '../css/carousel.css'
import anime1 from "../images/anime1.jpg";
import anime2 from "../images/anime2.jpg";
import anime3 from "../images/anime3.jpg";
import anime4 from "../images/anime4.jpg";
import anime5 from "../images/anime5.jpg";


const CarouselAnime: React.FC = () => {
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
          <img src={anime1} alt="Референс 1" />
        </div>
        <div>
          <img src={anime2} alt="Референс 2" />
        </div>
        <div>
          <img src={anime3} alt="Референс 3" />
        </div>
        <div>
          <img src={anime4} alt="Референс 4" />
        </div>
        <div>
          <img src={anime5} alt="Референс 5" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselAnime;
