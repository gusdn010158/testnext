"use client";
import Link from "next/link";
import styles from "./main.module.css";
import React from "react";
import api from "@/services/api";
import { AiOutlineArrowRight } from "react-icons/ai";
import Mid from "./Main/Mid";
import Storesmall from "./Store/Storesmall";
import SlickComponent from "@/libs/Slick";
import StoreMain from "./Store/StoreMain";
import Titleslick from "./Titleslick";

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
  const sliderImgStyle = {
    borderRadius: "5px",
    height: "510px",
    width: "100%",
  };

  const cturl = "http://localhost:3001/ctitem";

  const ctdata = api(cturl);

  const ctsliderImgStyle = {
    borderRadius: "5px",
    height: "250px",
    width: "195px",
  };

  var sett = {
    arrows: true,

    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500,

    pauseOnHover: true,
  };

  const url2 = "http://localhost:3001/mainitem";

  const data2 = api(url2);

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
              settings={settings}
              slides={data}
              sliderImgStyle={sliderImgStyle}
              className={styles.sliderImg}
            />
          </div>
        </div>
        <div className={styles.mainitem}>
          <Storesmall first={1} last={10} itemWidth="70px" itemHeight="60px" />
        </div>
        <div className={styles.mainct}>
          <div className={styles.Midtop}>
            <div>
              <h3>이런 사진을 찾고 있나요?</h3>
              <div>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</div>
            </div>
            <Link href="/">더보기</Link>
          </div>
          <SlickComponent
            settings={sett}
            slides={ctdata}
            sliderImgStyle={ctsliderImgStyle}
          />
        </div>

        <div className={styles.Mid}>
          <div className={styles.Midtop}>
            <h3>40평대 맞나요? 정말 잘 꾸몄어요😮</h3>
            <Link href="/">더보기</Link>
          </div>
          <div className={styles.ctitem}>
            <Mid first={19} last={22} />
          </div>

          <div className={styles.Midtop}>
            <h3>봄이 왔어요🌸 베란다 개방 시작!</h3>
            <Link href="/">더보기</Link>
          </div>
          <div className={styles.ctitem}>
            <Mid first={19} last={22} />
          </div>
          <div className={styles.Midtop}>
            <h3>카테고리별 상품 찾기</h3>
          </div>
          <div className={styles.mainitem}>
            <SlickComponent
              settings={set}
              slides={data2}
              sliderImgStyle={setImgStyle}
            />
          </div>
          <div className={styles.Midtop}>
            <h3>오늘의딜</h3>
            <Link href="/">더보기</Link>
          </div>
          <StoreMain first={1} last={4} />

          <div className={styles.Midtop}>
            <h3>유저들의 인테리어 시공 리뷰</h3>
            <Link href="/">더보기</Link>
          </div>
          <div className={styles.ctitem}>
            <Mid first={23} last={25} itemWidth="33%" />
          </div>

          <div className={styles.Midtop}>
            <h3>오늘의 기획전</h3>
            <Link href="/">더보기</Link>
          </div>
          <div className={styles.ctitem1}>
            <Mid first={11} last={13} itemWidth="33%" />
            <div className={styles.cticon}>
              <AiOutlineArrowRight className={styles.cicon} />
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                더보기
              </Link>
            </div>
          </div>
          <div className={styles.MidFooter}>
            <div className={styles.Midtop}>
              <h3>베스트</h3>
              <Link href="/">더보기</Link>
            </div>
            <Titleslick />
            <StoreMain first={7} last={9} itemWidth="33%" itemheight="70%" />
          </div>
        </div>
      </div>
    </div>
  );
}
