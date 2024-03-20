import React from "react";
import styles from "../Header/head.module.css";
import Link from "next/link";
function Headers() {
  return (
    <div className={styles.head}>
      <div className={styles.header}>
        <div className={styles.headlogo}>
          <h2>오늘의 집</h2>
          <Link className={styles.headLink} href="/">
            커뮤니티
          </Link>
          <Link className={styles.headLink} href="/">
            쇼핑
          </Link>
          <Link className={styles.headLink} href="/">
            인테리어/생활
          </Link>
        </div>
        <div className={styles.headlogin}>
          <input placeholder="시공 업체 검색" />

          <Link className={styles.headLink} href="/">
            장바구니
          </Link>
          <Link className={styles.headLink} href="/">
            로그인
          </Link>
          <Link className={styles.headLink} href="/">
            회원가입
          </Link>
          <Link className={styles.headLink} href="/">
            고객 센터
          </Link>

          <div>글쓰기</div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
