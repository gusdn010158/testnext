"use client";
import React from "react";
import Slick from "@/libs/Slick";
import Slick2 from "@/libs/Slick2";
import api from "@/services/api";
import styles from "../Store/store.module.css";
import Storesmall from "./Storesmall";
import StoreMain from "./StoreMain";
import Link from "next/link";
function page() {
  const url = "http://localhost:3001/storeitem";

  const data = api(url);

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

  return (
    <div className={styles.store}>
      <Slick
        settings={settings}
        slides={data}
        sliderImgStyle={sliderImgStyle}
      />

      <div className={styles.storein}>
        <div className={styles.storein1}>
          <Storesmall first={11} last={20} itemWidth="70px" itemHeight="60px" />
        </div>
        <div>
          <div className={styles.Midtop}>
            <div>
              <h3 className="font-roboto-700">오늘의 딜</h3>
            </div>
            <Link href="/">더보기</Link>
          </div>
          <div className={styles.storein2}>
            <StoreMain first={1} last={4} />
          </div>
        </div>
        <div className={styles.slickst}>
          <div className={styles.Midtop}>
            <div>
              <h3 className="font-roboto-700">카테고리</h3>
            </div>
          </div>
          <Slick2 />
        </div>
        <div className={styles.storein2}>
          <div className={styles.Midtop}>
            <div>
              <h3 className="font-roboto-700">인기 상품</h3>
              <div className="font-roboto-400">배송</div>
            </div>
            <Link href="/">인기순</Link>
          </div>
        </div>
        <div className={styles.storein2}>
          <StoreMain first={1} last={16} />
        </div>
      </div>
    </div>
  );
}

export default page;
