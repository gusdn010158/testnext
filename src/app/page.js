"use client";
import styles from "./main.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Slick from "./SlickP/Slick";
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
          {main.map((m) => (
            <div className={styles.mainitem1}>
              <img className={styles.img1} alt="12" src={m.img} />
              <div>{m.name}</div>
            </div>
          ))}
        </div>

        <Slick />
      </div>
    </div>
  );
}
