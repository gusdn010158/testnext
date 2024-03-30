"use client";
import React from "react";
import Slider from "react-slick";
import styles from "../main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import api from "@/services/api";

export default function Slick() {
  const CustomNextArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <AiOutlineRight />
    </div>
  );

  const CustomPrevArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <AiOutlineLeft />
    </div>
  );

  var settings = {
    arrows: true,
    nextArrow: <CustomNextArrow className="slick-next" />,
    prevArrow: <CustomPrevArrow className="slick-prev" />,
    slidesToScroll: 4,
    slidesToShow: 4,
    speed: 500,
  };

  // URL 정의
  const url = "http://localhost:3001/ctitem";
  // API 호출
  const data = api(url);

  return (
    <div className={styles.mainct}>
      <div className={styles.mainctop}>
        <div>
          <h4>이런 사진을 찾고 있나요?</h4>
          <div>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</div>
        </div>
        <Link href="/">더보기</Link>
      </div>
      <div className={styles.ctitem}>
        <Slider {...settings}>
          {data.map((m, id) => (
            <div className={styles.ctitem1} key={id}>
              <img alt="12" src={m.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
