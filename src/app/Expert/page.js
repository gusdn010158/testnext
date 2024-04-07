import React from "react";
import styles from "./Expert.module.css";
function page() {
  return (
    <div className={styles.main}>
      <div className={styles.expert}>
        <h3>책임보장 업체와 100% 매칭되는 간편 상담신청을 시작해요</h3>
        <div>오늘의집 책임보장이란?</div>
        <div className={styles.expert1}>업체와 분쟁 시 오늘의집이 해결</div>
        <div className={styles.expert1}>업체와 분쟁 시 오늘의집이 해결</div>
        <div className={styles.expert1}>업체와 분쟁 시 오늘의집이 해결</div>
        <button className={styles.button}>다음</button>
      </div>
    </div>
  );
}

export default page;
