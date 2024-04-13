import React from "react";

import api from "@/services/api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
function Titleslick() {
  const storeurl = "http://localhost:3001/mainitem";

  const datastore = api(storeurl);
  var settings = {
    arrows: true,
    autoplay: true,
    slidesToScroll: 5,
    slidesToShow: 10,
    speed: 500,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <StyledSlider {...settings}>
      {datastore.map((item) => (
        <Sdiv>{item.name}</Sdiv>
      ))}
    </StyledSlider>
  );
}

export default Titleslick;
const Sdiv = styled.div`
  background-color: gray;
  color: white;
  border-radius: 25px;
  width: 100px;
  height: 20px;
`;
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
