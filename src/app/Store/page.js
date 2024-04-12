"use client";
import React from "react";
import Slick from "@/libs/Slick";

import api from "@/services/api";
import styles from "../Store/store.module.css";
import Storesmall from "./Storesmall";
import StoreMain from "./StoreMain";

function page() {
  const url = "http://localhost:3001/storeitem";

  const data = api(url);

  const url2 = "http://localhost:3001/mainitem";

  const data2 = api(url2);
  const sliderImgStyle = {
    height: "400px",
    width: "100%",
  };
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
  const set = {
    infinite: true,
    speed: 1000, // 넘어가는 속도 (ms)
    autoplay: true, // 자동 넘김 활성화
    autoplaySpeed: 5000, // 자동 넘김 속도 (ms)
    slidesToShow: 10,
    slidesToScroll: 5,
    arrows: true,
    pauseOnHover: true,
  };
  const setImgStyle = {
    height: "70px",
    width: "70px",
  };
  return (
    <div className={styles.store}>
      <Slick
        settings={settings}
        slides={data}
        sliderImgStyle={sliderImgStyle}
      />

      <div className={styles.storein}>
        <Storesmall first={1} last={10} />
        <div>
          <div>
            <h3>오늘의 딜</h3>
            <div>더보기</div>
          </div>
          <div className={styles.storein2}>
            <StoreMain first={1} last={4} />
          </div>
        </div>
        <div className={styles.slickst}>
          <Slick settings={set} slides={data2} sliderImgStyle={setImgStyle} />
        </div>
        <div className={styles.storein2}>
          <div className={styles.storein3}>
            <div>
              <h3>인기상품</h3>
              <div>배송</div>
            </div>
            <div>인기순</div>
          </div>
        </div>
        <div className={styles.storein2}>
          <StoreMain first={1} last={18} />
        </div>
      </div>
    </div>
  );
}

export default page;
