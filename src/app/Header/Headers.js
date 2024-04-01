"use client";
import React, { useState } from "react";
import styles from "../Header/head.module.css";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

import HeaderBest from "./HeaderBest";

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
              href="/Store"
              onMouseEnter={() => handleMenuHover("shopping")}
              onMouseLeave={handleMenuLeave}
            >
              쇼핑
            </Link>

            <Link
              className={styles.headLink}
              href="/Expert"
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
              <Link href="/">추천</Link>
              <Link href="/">#채널</Link>
              <Link href="/">집들이</Link>
              <Link href="/">집사진</Link>
              <Link href="/">3D인테리어</Link>
              <Link href="/">살림수납</Link>
              <Link href="/">콜레터블</Link>
              <Link href="/">홈스토랑</Link>
              <Link href="/">핫플레이스</Link>
              <Link href="/">육아</Link>
            </div>
            <div className={styles.btright}>
              <HeaderBest />
            </div>
          </div>
        ))}
      {activeMenu === "shopping" && (
        <div className={styles.headerbt}>
          <div className={styles.btleft}>
            <Link href="/">쇼핑홈</Link>
            <Link href="/">카테고리</Link>
            <Link href="/">베스트</Link>
            <Link href="/">오늘의 딜</Link>
            <Link href="/">리퍼마켓</Link>
            <Link href="/">오!굿즈</Link>
            <Link href="/">빠른배송</Link>
            <Link href="/">오!쇼룸</Link>
            <Link href="/">프리미엄</Link>
            <Link href="/">기획전</Link>
          </div>
          <div className={styles.btright}>
            <HeaderBest />
          </div>
        </div>
      )}
      {activeMenu === "interior" && (
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
            <HeaderBest />
          </div>
        </div>
      )}
    </>
  );
}

export default Headers;
