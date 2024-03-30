// SlickUIComponent.js
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styles from "../Header/head.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickUIComponent = ({ data }) => {
  const [toast, setToast] = useState(false);

  const onClick = () => {
    setToast(!toast);
  };

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    pauseOnHover: true,
  };

  return (
    <>
      <div className={styles.slickTop}>
        <Slider {...settings}>
          {data.map((m) => (
            <div className={styles.top} key={m.id}>
              {m.id} {m.name}
            </div>
          ))}
        </Slider>
      </div>
      <div onClick={onClick}>
        <AiOutlineDown />
      </div>
      {toast === true && (
        <div className={styles.toast} onClick={onClick}>
          <div className={styles.toasth2}>
            <h3>인기 검색어</h3>
            <AiOutlineUp />
          </div>
          {data.map((m) => (
            <div className={styles.toasttop} key={m.id}>
              {m.id} {m.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SlickUIComponent;
