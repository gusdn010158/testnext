import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slick = ({ settings, slides, sliderImgStyle }) => {
  return (
    <StyledSlider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Sliderimg
            src={slide.images}
            alt={`Slide ${index}`}
            sliderImgStyle={sliderImgStyle}
          />
        </div>
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
    top: 180px;
  }

  .slick-next {
    z-index: 1;
    right: 40px;
    top: 180px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.3;
    color: black;
  }
  .slick-prev:before:hover,
  .slick-next:before:hover {
    opacity: 1;
  }
`;
const Sliderimg = styled.img``;

export default Slick;
