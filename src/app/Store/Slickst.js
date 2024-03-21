"use client";
import Slider from "react-slick";

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
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {T.map((m) => (
          <img src={m.img} />
        ))}
      </Slider>
    </div>
  );
}

export default Slickst;
