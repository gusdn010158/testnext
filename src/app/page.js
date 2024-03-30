"use client";
import styles from "./main.module.css";
import React from "react";
import api from "@/services/api";

import MainMid from "./Mainmid/MainMid";
import Mid from "./MainMid2/Mid";
export default function Home() {
  const url = "http://localhost:3001/mainitem";
  // API 호출
  const data = api(url);
  return (
    <div className={styles.main}>
      <div className={styles.maincom}>
        <div className={styles.mainad}>
          <div className={styles.mainad1}></div>
          <div className={styles.mainad2}></div>
        </div>
        <div className={styles.mainitem}>
          {data.map((m) => (
            <div className={styles.mainitem1}>
              <img className={styles.img1} alt="12" src={m.img} />
              <div>{m.name}</div>
            </div>
          ))}
        </div>

        <MainMid />
        <Mid />
      </div>
    </div>
  );
}
