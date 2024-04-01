import styles from "../main.module.css";
import React from "react";

import api from "@/services/api";

function Mid() {
  const url = "http://localhost:3001/MidTwo";

  const data = api(url);
  return (
    <div className={styles.Mid}>
      <div className={styles.Midtop}>
        <div>40평대 맞나요? 정말 잘 꾸몄어요😮</div>
        <div>더보기</div>
      </div>
      <div className={styles.ctitem}>
        {data.map((m) => (
          <div className={styles.Miditem}>
            <img className={styles.Midimg} alt="12" src={m.img} />
            <div>{m.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mid;
