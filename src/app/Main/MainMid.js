import React from "react";
import styles from "../main.module.css";
import Link from "next/link";
import api from "@/services/api";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import SlickComponent from "@/libs/Slick";
export default function Slick() {
  const url = "http://localhost:3001/ctitem";

  const data = api(url);

  const sliderImgStyle = {
    borderRadius: "5px",
    height: "250px",
    width: "190px",
  };

  var settings = {
    arrows: true,

    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500,

    pauseOnHover: true,
  };
  return (
    <div className={styles.mainct}>
      <div className={styles.mainctop}>
        <div>
          <h4>이런 사진을 찾고 있나요?</h4>
          <div>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</div>
        </div>
        <Link href="/">더보기</Link>
      </div>
      <SlickComponent
        settings={settings}
        slides={data}
        sliderImgStyle={sliderImgStyle}
      />
    </div>
  );
}
