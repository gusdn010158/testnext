"use client";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import Slider from "react-slick";
import styles from "../Header/head.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Slicktop = () => {
  const [T, setT] = useState([]);
  const [toast, settoast] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/mainitem").then((res) => {
      setT(res.data);
    });
  }, []);
  const onclick = () => {
    settoast(!toast);
  };
  const settings = {
    infinite: true,
    speed: 1000, // 넘어가는 속도 (ms)
    autoplay: true, // 자동 넘김 활성화
    autoplaySpeed: 2000, // 자동 넘김 속도 (ms)
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <div className={styles.slickTop}>
        <Slider {...settings}>
          {T.map((m) => (
            <div className={styles.top}>
              {m.id} {m.name}
            </div>
          ))}
        </Slider>
      </div>
      <div onClick={onclick}>
        <AiOutlineDown />{" "}
      </div>
      {toast === true && (
        <div className={styles.toast} onClick={onclick}>
          {" "}
          <div className={styles.toasth2}>
            <h3>인기 검색어</h3>
            <AiOutlineUp />
          </div>
          {T.map((m) => (
            <div className={styles.toasttop}>
              {m.id} {m.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Slicktop;
