"use client";

import styles from "./main.module.css";
import React from "react";
import api from "@/services/api";
import MainMid from "./Main/MainMid";
import Mid from "./Main/Mid";
import Mainsmall from "./Main/Mainsmall";
import SlickComponent from "@/libs/Slick";
import StoreMid from "./Store/StoreMid";

const sliderImgStyle = {
  borderRadius: "5px",
  height: "510px",
  width: "100%",
};

export default function Home() {
  const url = "http://localhost:3001/MainSide";
  const data = api(url);
  const twourl = "http://localhost:3001/MidTwo";

  const datatwo = api(twourl);

  const storeurl = "http://localhost:3001/store2";

  const datastore = api(storeurl);
  const itemurl = "http://localhost:3001/mainitem";
  // API 호출
  const iu = api(itemurl);
  const itemurl2 = "http://localhost:3001/mainitem2";
  // API 호출
  const iu2 = api(itemurl2);

  const dlsxpdlfj = "http://localhost:3001/dlsxpdlfj";
  // API 호출
  const dddd = api(dlsxpdlfj);
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
          {iu.map((m) => (
            <Mainsmall img={m.img} name={m.name} />
          ))}
        </div>
        <MainMid />

        <div className={styles.Mid}>
          <div className={styles.Midtop}>
            <h3>40평대 맞나요? 정말 잘 꾸몄어요😮</h3>
            <div>더보기</div>
          </div>
          <div className={styles.ctitem}>
            {datatwo.map((item) => (
              <Mid img={item.img} title={item.title} />
            ))}
          </div>

          <div className={styles.Midtop}>
            <h3>봄이 왔어요🌸 베란다 개방 시작!</h3>
            <div>더보기</div>
          </div>
          <div className={styles.ctitem}>
            {datastore.map((item) => (
              <Mid img={item.img} title={item.title} />
            ))}
          </div>
          <div className={styles.Midtop}>
            <h3>카테고리별 상품 찾기</h3>
            <div></div>
          </div>
          <div className={styles.mainitem}>
            {iu2.map((m) => (
              <Mainsmall img={m.img} name={m.name} />
            ))}
          </div>
          <div className={styles.Midtop}>
            <h3>오늘의딜</h3>
            <div>더보기</div>
          </div>
          <StoreMid />

          <div className={styles.Midtop}>
            <h3>유저들의 인테리어 시공 리뷰</h3>
            <div>더보기</div>
          </div>
          <div className={styles.ctitem}>
            {dddd.map((item) => (
              <Mid img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
