"use client";
import React from "react";
import Link from "next/link";
import styles from "./main.module.css";
import api from "@/services/api";
import { AiOutlineArrowRight } from "react-icons/ai";
import Mid from "./Main/Mid";
import Storesmall from "./Store/Storesmall";
import SlickComponent from "@/libs/Slick";
import StoreMain from "./Store/StoreMain";
import Titleslick from "../libs/Titleslick";
import Slick2 from "@/libs/Slick2";

const sliderSettings = {
  arrows: true,
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  autoplaySpeed: 2500,
  pauseOnHover: true,
};

const ctSliderSettings = {
  arrows: true,
  slidesToScroll: 2,
  slidesToShow: 6,
  speed: 500,
  pauseOnHover: true,
};

const sliderImgStyle = {
  borderRadius: "5px",
  height: "510px",
  width: "100%",
};

const ctSliderImgStyle = {
  borderRadius: "5px",
  height: "250px",
  width: "195px",
};

const arrowStyle = {
  left: "-20px",
  right: "0px",
};

const arrowStyle2 = {
  left: "-25px",
  right: "0px",
};

const arrowStyle3 = {
  left: "-20px",
};

export default function Home() {
  const data = api("/api/data?type=MainSide");
  const ctData = api("/api/data?type=ctitem");

  const renderSectionHeader = (title, link = "/") => (
    <div className={styles.Midtop}>
      <h3 className="font-roboto-700">{title}</h3>
      <Link className="font-roboto-700" href={link}>
        더보기
      </Link>
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.maincom}>
        <div className={styles.mainad}>
          <div className={styles.mainad1}>
            <img
              className={styles.mainad1img}
              alt="img"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/170348384671728438.jpg?w=850&h=510&c=c"
            />
          </div>
          <div className={styles.mainad2}>
            <SlickComponent
              settings={sliderSettings}
              slides={data}
              sliderImgStyle={sliderImgStyle}
              arrowStyle={arrowStyle}
              className={styles.sliderImg}
            />
          </div>
        </div>
        <div className={styles.mainitem}>
          <Storesmall first={1} last={10} itemWidth="70px" itemHeight="60px" />
        </div>
        <div className={styles.mainct}>
          {renderSectionHeader("이런 사진을 찾고 있나요?")}
          <SlickComponent
            settings={ctSliderSettings}
            slides={ctData}
            sliderImgStyle={ctSliderImgStyle}
            arrowStyle={arrowStyle2}
          />
        </div>

        <div className={styles.Mid}>
          {renderSectionHeader("40평대 맞나요? 정말 잘 꾸몄어요😮")}
          <div className={styles.ctitem}>
            <Mid first={17} last={20} />
          </div>
          {renderSectionHeader("봄이 왔어요🌸 베란다 개방 시작!")}
          <div className={styles.ctitem}>
            <Mid first={24} last={27} />
          </div>
          {renderSectionHeader("카테고리별 상품 찾기")}
          <div className={styles.mainitem}>
            <Slick2 arrowStyle={arrowStyle3} />
          </div>
          {renderSectionHeader("오늘의딜")}
          <StoreMain first={1} last={4} />
          {renderSectionHeader("유저들의 인테리어 시공 리뷰")}
          <div className={styles.ctitem}>
            <Mid first={21} last={23} itemWidth="33%" />
          </div>
          {renderSectionHeader("오늘의 기획전")}
          <div className={styles.ctitem1}>
            <Mid first={11} last={13} itemWidth="31%" />
            <div className={styles.cticon}>
              <AiOutlineArrowRight className={styles.cicon} />
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                더보기
              </Link>
            </div>
          </div>
          <div className={styles.MidFooter}>
            {renderSectionHeader("베스트")}
            <Titleslick />
            <StoreMain first={7} last={9} itemWidth="33%" itemheight="70%" />
          </div>
        </div>
      </div>
    </div>
  );
}
