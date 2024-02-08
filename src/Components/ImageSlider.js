import React from "react";
import Slider from "react-slick";
import { bereal_img2 } from '../assets/images';

export default function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={bereal_img2} alt="bereal_img2"/>
      </div>
      <div>
      <img src={bereal_img2} alt="bereal_img2"/>
      </div>
      <div>
      <img src={bereal_img2} alt="bereal_img2"/>
      </div>
    </Slider>
  );
}