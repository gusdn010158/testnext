import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slick = ({ settings, slides, sliderImgStyle }) => {
  return (
    <StyledSlider {...settings}>
      {slides.map((slide, index) => (
        <Slidiv key={index}>
          <Sliderimg
            src={slide.img}
            alt={`Slide ${index}`}
            style={sliderImgStyle}
          />
          <Sliderdiv>{slide.name}</Sliderdiv>
        </Slidiv>
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    z-index: 1;
    right: 40px;
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
  width: 100%;
  :hover {
    width: 120%;
    height: 120%;
  }
`;
const Sliderdiv = styled.div``;

export default Slick;
