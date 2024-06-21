import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slick = ({ settings, slides, sliderImgStyle, arrowStyle }) => {
  return (
    <StyledSlider {...settings} arrowStyle={arrowStyle}>
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
    left: ${(props) => props.arrowStyle?.left || "auto"};
    opacity: 0.1;
  }

  .slick-next {
    z-index: 1;
    right: ${(props) => props.arrowStyle?.right || "auto"};
    opacity: 0.1;
  }

  .slick-next:hover,
  .slick-prev:hover {
    opacity: 1;
  }
  .slick-prev:before {
    font-size: ${(props) => props.arrowStyle?.fontSize1 || "auto"};
    color: black;
    opacity: 0.5;
  }

  .slick-next:before {
    font-size: ${(props) => props.arrowStyle?.fontSize2 || "auto"};
    color: black;
    opacity: 0.5;
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
`;
const Sliderdiv = styled.div``;

export default Slick;
