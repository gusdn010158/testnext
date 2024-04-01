import React from "react";
import api from "@/services/api";
import styles from "../main.module.css";
function Mainsmall() {
  const url = "http://localhost:3001/mainitem";
  // API 호출
  const data = api(url);
  return (
    <div className={styles.mainitem}>
      {data.map((m) => (
        <div className={styles.mainitem1}>
          <img className={styles.img1} alt="12" src={m.img} />
          <div>{m.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Mainsmall;
