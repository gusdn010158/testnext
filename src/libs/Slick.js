import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slick = ({ settings, slides, sliderImgStyle }) => {
  return (
    <StyledSlider {...settings}>
      {slides.map((slide, index) => (
        <Slidiv key={index}>
          <Sliderimg
            src={slide.images}
            alt={`Slide ${index}`}
            style={sliderImgStyle}
          />
        </Slidiv>
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
    top: 181px;
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
const Slidiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Sliderimg = styled.img`
  border-radius: ${(props) => props.style?.borderRadius || "inherit"};
  height: ${(props) => props.style?.height || "auto"};
  width: ${(props) => props.style?.width || "auto"};
`;

export default Slick;
