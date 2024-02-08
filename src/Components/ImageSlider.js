import React from "react";
import Slider from "react-slick";
import { bereal_img1, bereal_img2, bereal_img3 } from '../assets/images';

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
        <img src={bereal_img1} alt="bereal_img1"/>
      </div>
      <div>
      <img src={bereal_img2} alt="bereal_img2"/>
      </div>
      <div>
      <img src={bereal_img3} alt="bereal_img3"/>
      </div>
    </Slider>
  );
}