"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slickst from "./Slickst";
import styles from "../Store/store.module.css";
function page() {
  const [T, setT] = useState([]);
  const [d, setd] = useState([]);
  const [a, seta] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/store").then((res) => {
      setT(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3001/store2").then((res) => {
      seta(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3001/mainitem").then((res) => {
      setd(res.data);
    });
  });
  return (
    <div className={styles.store}>
      <Slickst />
      <div className={styles.storein}>
        <div className={styles.stitem}>
          {d.map((m) => (
            <div className={styles.sti}>
              <img className={styles.sticon} src={m.img} />
              <div>{m.name}</div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h3>오늘의 딜</h3>
            <div>더보기</div>
          </div>
          <div className={styles.storeflex}>
            {a.map((m) => (
              <div className={styles.storeitem}>
                <div className={styles.storeimgtem}>
                  <img className={styles.storeimg} src={m.img} />
                </div>

                <div>
                  <div>{m.name}</div>
                  <div>{m.text}</div>
                  <div>{m.price}원</div>
                  <div className={styles.emr}>특가</div>
                  <div className={styles.gkf}>할인 쿠폰</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3>카테고리</h3>
        <div className={styles.stitem}>
          {d.map((m) => (
            <div className={styles.sti}>
              <img className={styles.sticon} src={m.img} />
              <div>{m.name}</div>
            </div>
          ))}
        </div>
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
              <div className={styles.storeimgtem}>
                <img className={styles.storeimg} src={m.img} />
              </div>
              <div>
                <div>{m.name}</div>
                <div>{m.text}</div>
                <div>{m.price}원</div>
                <div className={styles.emr}>특가</div>
                <div className={styles.gkf}>할인 쿠폰</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
