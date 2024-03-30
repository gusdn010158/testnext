import React from "react";
import styles from "../main.module.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import api from "@/services/api";

var settings = {
  arrows: true,

  slidesToScroll: 4,
  slidesToShow: 4,
  speed: 500,

  pauseOnHover: true,
};
function MidSlick() {
  const url = "http://localhost:3001/ctitem";

  const data = api(url);
  return (
    <div className={styles.ctitem}>
      <StyledSlider {...settings}>
        {data.map((m, id) => (
          <div className={styles.ctitem1} key={id}>
            <img alt="12" src={m.img} />
          </div>
        ))}
      </StyledSlider>
    </div>
  );
}

export default MidSlick;

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: -25px;
    top: 120px;
  }

  .slick-next {
    top: 120px;
    right: 45px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    opacity: 0.3;
    color: black;
  }
  .slick-prev:before:hover,
  .slick-next:before:hover {
    opacity: 1;
  }
`;
