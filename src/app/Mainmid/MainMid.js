import React from "react";
import styles from "../main.module.css";
import Link from "next/link";
import MidSlick from "./MidSlick";

export default function Slick() {
  return (
    <div className={styles.mainct}>
      <div className={styles.mainctop}>
        <div>
          <h4>이런 사진을 찾고 있나요?</h4>
          <div>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</div>
        </div>
        <Link href="/">더보기</Link>
      </div>
      <MidSlick />
    </div>
  );
}
