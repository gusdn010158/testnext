import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "../main.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
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
    arrows: true, // 양 끝 화살표 생성여부
    nextArrow: <CustomNextArrow className="slick-next" />,
    prevArrow: <CustomPrevArrow className="slick-prev" />,
    // dots: true, // 슬라이더 아래에 슬라이드 개수를 점 형태로 표시
    // infinite: true, // 슬라이드가 맨 끝에 도달했을 때 처음 슬라이드를 보여줄지 여부
    slidesToShow: 4, // 화면에 한번에 표시할 슬라이드 개수 설정
    // 옆으로 스크롤할 때 보여줄 슬라이드 수 설정
    speed: 500, // 슬라이드 넘길 때 속도
    // autoplay: true, // 슬라이드를 자동으로 넘길지 여부
    // autoplaySpeed: 3000, // 자동으로 넘길 시 시간 간격
  };
  const [two, setTwo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/ctitem").then((res) => {
      setTwo(res.data);
    });
  }, []);
  return (
    <div className={styles.mainct}>
      <div className={styles.mainctop}>
        <div>
          <h4>이런 사진을 찾고있나요?</h4>
          <div>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</div>
        </div>
        <Link href="/">더보기</Link>
      </div>
      <div className={styles.ctitem}>
        <Slider {...settings}>
          {two.map((m, id) => (
            <div className={styles.ctitem1}>
              <img alt="12" src={m.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
