"use client";

import Slider from "react-slick";
import styles from "../Header/head.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Slicktop = () => {
  const [T, setT] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/mainitem").then((res) => {
      setT(res.data);
    });
  }, []);

  const settings = {
    dots: true,
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
    <Slider {...settings}>
      {T.map((m) => (
        <div className={styles.top}>{m.name}</div>
      ))}
    </Slider>
  );
};

export default Slicktop;
