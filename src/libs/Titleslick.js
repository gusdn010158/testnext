import React from "react";

import api from "@/services/api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
function Titleslick() {
  const storeurl = "/api/data?type=MainItem";

  const datastore = api(storeurl);
  var settings = {
    arrows: true,

    slidesToScroll: 5,
    slidesToShow: 10,
    speed: 500,

    pauseOnHover: true,
  };
  return (
    <StyledSlider {...settings}>
      {datastore.map((item) => (
        <S key={item.id}>
          <Sdiv>{item.name}</Sdiv>
        </S>
      ))}
    </StyledSlider>
  );
}

export default Titleslick;
const S = styled.div`
  display: flex;
`;
const Sdiv = styled.div`
  background-color: rgb(238, 238, 238);
  color: black;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 20px;
`;
const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: -30px;
    opacity: 0.1;
    top: 5px;
  }

  .slick-next {
    z-index: 1;
    right: 00px;
    opacity: 0.1;
    top: 5px;
  }

  .slick-next:hover,
  .slick-prev:hover {
    opacity: 1;
  }
  .slick-prev:before {
    font-size: 50px;
    color: black;
    opacity: 0.5;
  }

  .slick-next:before {
    font-size: 50px;
    color: black;
    opacity: 0.5;
  }
`;
