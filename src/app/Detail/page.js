import React from "react";
import styles from "./Detail.module.css";
function page(props) {
  return (
    <div className={styles.detail}>
      <div className={styles.detailin}>
        <div className={styles.dleft}>
          <div className={styles.leftimgs}>
            <div className={styles.smallimg}>작은 이미지</div>
            <div className={styles.dleftimg}>img</div>
          </div>
        </div>
        <div className={styles.dright}>
          퀵슬립 Q4 유로탑 롤팩 매트리스 2size 70,945 15,902개 리뷰 57%710,000원
          299,900 원 혜택 300P 적립 (WELCOME 0.1% 적립) 월 74,975원 (4개월)
          무이자할부 배송 무료배송 화물택배상품 제주도/도서산간 지역 50,000원
        </div>
      </div>
    </div>
  );
}

export default page;
