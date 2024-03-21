"use client";
import React, { useState } from "react";
import styles from "../Header/head.module.css";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import Slicktop from "./Slicktop";

function Headers() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <div className={styles.head}>
        <div className={styles.header}>
          <div className={styles.headlogo}>
            <h2>
              <Link className={styles.headLink} href="/">
                오늘의 집
              </Link>
            </h2>

            <Link
              className={styles.headLink}
              href="/"
              onMouseEnter={() => handleMenuHover("community")}
              onMouseLeave={handleMenuLeave}
            >
              커뮤니티
            </Link>

            <Link
              className={styles.headLink}
              href="/store"
              onMouseEnter={() => handleMenuHover("shopping")}
              onMouseLeave={handleMenuLeave}
            >
              쇼핑
            </Link>

            <Link
              className={styles.headLink}
              href="/experts"
              onMouseEnter={() => handleMenuHover("interior")}
              onMouseLeave={handleMenuLeave}
            >
              인테리어/생활
            </Link>
          </div>
          <div className={styles.headlogin}>
            <input placeholder="시공 업체 검색" />

            <Link className={styles.headLink} href="/cart">
              <FaCartShopping />
            </Link>
            <Link className={styles.headLink} href="/">
              로그인
            </Link>
            <Link className={styles.headLink} href="/">
              회원가입
            </Link>
            <Link className={styles.headLink} href="/customer">
              고객 센터
            </Link>

            <div>글쓰기</div>
          </div>
        </div>
      </div>
      {activeMenu === "community" ||
        (activeMenu === null && (
          <div className={styles.headerbt}>
            <div className={styles.btleft}>
              <Link href="/">홈</Link>
              <Link href="/">주거공간시공</Link>
              <Link href="/">상업공간시공</Link>
              <Link href="/">시공자재랭킹</Link>
              <Link href="/">제품설치</Link>
              <Link href="/">이사</Link>
              <Link href="/">집보기 체크리스트</Link>
              <Link href="/">아파트시공사례</Link>
            </div>
            <div className={styles.btright}>
              <Slicktop />
            </div>
          </div>
        ))}
      {activeMenu === "shopping" && (
        <div className={styles.headerbt}>헤더 아래2</div>
      )}
      {activeMenu === "interior" && (
        <div className={styles.headerbt}>헤더 아래3</div>
      )}
    </>
  );
}

export default Headers;
