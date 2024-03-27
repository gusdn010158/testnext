"use client";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Slickst() {
  const [T, setT] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/storeitem").then((res) => {
      setT(res.data);
    });
  }, []);
  const settings = {
    infinite: true,
    speed: 1000, // 넘어가는 속도 (ms)
    autoplay: true, // 자동 넘김 활성화
    autoplaySpeed: 5000, // 자동 넘김 속도 (ms)
    slidesToShow: 1,

    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        {T.map((m) => (
          <img src={m.img} />
        ))}
      </StyledSlider>
    </div>
  );
}

export default Slickst;

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
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
