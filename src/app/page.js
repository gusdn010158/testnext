"use client";
import styles from "./main.module.css";
import React from "react";
import api from "@/services/api";
import MainMid from "./Main/MainMid";
import Mid from "./Main/Mid";
import Mainsmall from "./Main/Mainsmall";
import SlickComponent from "@/libs/Slick";
import styled from "styled-components";
export default function Home() {
  const url = "http://localhost:3001/MainSide";
  const data = api(url);

  const sliderStyle = {
    borderRadius: "5px",
    height: "510px",
    width: "100%",
  };
  var settings = {
    arrows: true,

    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,

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
              sliderStyle={sliderStyle}
            />
          </div>
        </div>
        <Mainsmall />

        <MainMid />
        <Mid />
      </div>
    </div>
  );
}
