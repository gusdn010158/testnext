"use client";
import React, { useState } from "react";
import styles from "../Header/head.module.css";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import api from "@/services/api";
import HeaderBest from "./HeaderBest";

function Headers() {
  const fristurl = "http://localhost:3001/Header";
  const friststoredata = api(fristurl);
  const [index, setIndex] = useState(0);
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

            {friststoredata.map((item) => (
              <Link
                className={styles.headLink}
                href={`/${item.href}`}
                onMouseOver={() => setIndex(item.id)}
              >
                {item.title}
              </Link>
            ))}
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
      <div className={styles.headerbt}>
        <div className={styles.btleft}>
          {friststoredata
            .filter((item) => index === item.id)
            .map((item) => (
              <>
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
              </>
            ))}
        </div>
        <div className={styles.btright}>
          <HeaderBest />
        </div>
      </div>
    </>
  );
}

export default Headers;
