"use client";
import React, { useState, useEffect } from "react";
import styles from "../Header/head.module.css";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import api from "@/services/api";
import HeaderBest from "./HeaderBest";

import Headertoast from "./Headertoast";

function Headers() {
  const url = "/api/data?type=Header";
  const Header = api(url);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    // 페이지가 처음으로 렌더링될 때 index를 특정 id 값으로 설정하여 해당 id에 해당하는 컴포넌트를 보여줌
    setIndex(1); // 여기를 특정 id 값으로 변경하세요
  }, []);

  return (
    <>
      <div className={styles.head}>
        <div className={styles.header}>
          <div className={styles.headlogo}>
            <h2>
              <Link className={styles.headLink} href="/">
                <img
                  className={styles.headLinklogo}
                  src="https://blog.kakaocdn.net/dn/eyPIsT/btqBO74U3Ky/jNO3yCYab0xoG7w4VsAiAk/img.jpg"
                  alt="main"
                />
              </Link>
            </h2>

            {Header.map((item) => (
              <Link
                key={item.id}
                className={styles.headLink2}
                href={`/${item.href}`}
                onMouseOver={() => setIndex(item.id)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className={styles.headlogin}>
            <input placeholder="쇼핑 검색" />

            <Link className={styles.headLink} href="/Cart">
              <FaCartShopping />
            </Link>

            <Link
              className={`${styles.headLink} font-roboto-400`}
              href="/Login"
            >
              로그인
            </Link>
            <Link
              className={`${styles.headLink} font-roboto-400`}
              href="/SignUp"
            >
              회원가입
            </Link>
            <Link
              className={`${styles.headLink} font-roboto-400`}
              href="/Customer"
            >
              고객 센터
            </Link>
            <Headertoast />
          </div>
        </div>
      </div>
      <div className={styles.headerbt}>
        <div>
          {Header.filter((item) => index == item.id).map((item) => (
            <div
              className={`${styles.btleft1}  font-noto_sans_kr`}
              key={item.id}
            >
              <Link href="/">{item.one}</Link>
              <Link href="/">{item.two}</Link>
              <Link href="/">{item.three}</Link>
              <Link href="/">{item.four}</Link>
              <Link href="/">{item.five}</Link>
              <Link href="/">{item.six}</Link>
              <Link href="/">{item.seven}</Link>
              <Link href="/">{item.eight}</Link>
              <Link href="/">{item.nine}</Link>
              <Link href="/">{item.ten}</Link>
              <Link href="/">{item.tenone}</Link>
            </div>
          ))}
        </div>

        <div className={styles.btright}>
          <HeaderBest first={1} last={10} />
        </div>
      </div>
    </>
  );
}

export default Headers;
