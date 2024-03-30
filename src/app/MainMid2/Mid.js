import styles from "./Mid.module.css";
import React from "react";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import api from "@/services/api";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
function Mid() {
  const url = "http://localhost:3001/MidTwo";

  const data = api(url);
  return (
    <div className={styles.Mid}>
      <div className={styles.Midtop}>
        <div>40평대 맞나요? 정말 잘 꾸몄어요😮</div>
        <div>더보기</div>
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

export default Mid;
