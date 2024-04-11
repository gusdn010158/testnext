"use client";

import styles from "./main.module.css";
import React from "react";
import api from "@/services/api";
import MainMid from "./Main/MainMid";
import Mid from "./Main/Mid";
import Mainsmall from "./Main/Mainsmall";
import SlickComponent from "@/libs/Slick";
import StoreMain from "./Store/StoreMain";

const sliderImgStyle = {
  borderRadius: "5px",
  height: "510px",
  width: "100%",
};
export default function Home() {
  const url = "http://localhost:3001/MainSide";
  const data = api(url);

  var settings = {
    arrows: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className={styles.main}>
      <div className={styles.maincom}>
        <div className={styles.mainad}>
          <div className={styles.mainad1}></div>
          <div className={styles.mainad2}>
            <SlickComponent
              settings={settings}
              slides={data}
              sliderImgStyle={sliderImgStyle}
            />
          </div>
        </div>
        <div className={styles.mainitem}>
          <Mainsmall first={1} last={10} />
        </div>
        <MainMid />

        <div className={styles.Mid}>
          <div className={styles.Midtop}>
            <h3>40평대 맞나요? 정말 잘 꾸몄어요😮</h3>
            <div>더보기</div>
          </div>
          <div className={styles.ctitem}>
            <Mid first={19} last={22} />
          </div>

          <div className={styles.Midtop}>
            <h3>봄이 왔어요🌸 베란다 개방 시작!</h3>
            <div>더보기</div>
          </div>
          <div className={styles.ctitem}>
            <Mid first={19} last={22} />
          </div>
          <div className={styles.Midtop}>
            <h3>카테고리별 상품 찾기</h3>
            <div></div>
          </div>
          <div className={styles.mainitem}>
            <Mainsmall first={11} last={20} />
          </div>
          <div className={styles.Midtop}>
            <h3>오늘의딜</h3>
            <div>더보기</div>
          </div>
          <StoreMain first={1} last={4} />

          <div className={styles.Midtop}>
            <h3>유저들의 인테리어 시공 리뷰</h3>
            <div>더보기</div>
          </div>
          <div className={styles.ctitem}>
            <Mid first={23} last={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
