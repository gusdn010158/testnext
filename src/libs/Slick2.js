import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import api from "@/services/api";
const Slick = () => {
  const url2 = "http://localhost:3001/mainitem";
  const settings = {
    infinite: true,
    speed: 1000, // 넘어가는 속도 (ms)
    autoplay: true, // 자동 넘김 활성화
    autoplaySpeed: 5000, // 자동 넘김 속도 (ms)
    slidesToShow: 10,
    slidesToScroll: 5,
    arrows: true,
    pauseOnHover: true,
  };

  const data2 = api(url2);
  const store = data2.slice(21, 36);
  return (
    <StyledSlider {...settings}>
      {store.map((slide, index) => (
        <Slidiv key={index}>
          <Sliderimg src={slide.img} alt={`Slide ${index}`} />
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
  height: 70px;
  width: 70px;
  :hover {
    width: 120%;
    height: 120%;
  }
`;
const Sliderdiv = styled.div``;

export default Slick;
