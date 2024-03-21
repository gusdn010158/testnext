"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slickst from "./Slickst";
import styles from "../Store/store.module.css";
function page() {
  const [T, setT] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/store").then((res) => {
      setT(res.data);
    });
  }, []);
  return (
    <div className={styles.store}>
      <Slickst />
      <div className={styles.storein}>
        <div className={styles.storein2}>
          <div className={styles.storein3}>
            <div>
              <h3>인기상품</h3>
              <div>배송</div>
            </div>
            <div>인기순</div>
          </div>
        </div>
        <div className={styles.storeflex}>
          {T.map((m) => (
            <div className={styles.storeitem}>
              <img className={styles.storeimg} src={m.img} />
              <div>{m.name}</div>
              <div>{m.text}</div>
              <div>{m.price}원</div>
              <div>특가</div>
              <div>할인 쿠폰</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
