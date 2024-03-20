"use client";
import styles from "./main.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function Home() {
  const [main, setMain] = useState([]);
  const [two, setTwo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/mainitem").then((res) => {
      setMain(res.data);
    });
  });
  useEffect(() => {
    axios.get("http://localhost:3001/ctitem").then((res) => {
      setTwo(res.data);
    });
  });
  return (
    <div className={styles.main}>
      <div className={styles.maincom}>
        <div className={styles.mainad}>
          <div className={styles.mainad1}></div>
          <div className={styles.mainad2}></div>
        </div>
        <div className={styles.mainitem}>
          {main.map((m, id) => (
            <div className={styles.mainitem1}>
              <img className={styles.img1} alt="12" src={m.img} />
              <div>{m.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.mainct}>
          <div className={styles.mainctop}>
            <div>
              <h4>이런 사진을 찾고있나요?</h4>
              <div>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</div>
            </div>
            <Link href="/">더보기</Link>
          </div>
          <div className={styles.ctitem}>
            {two.map((m, id) => (
              <div className={styles.ctitem1}>
                <img alt="12" src={m.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
