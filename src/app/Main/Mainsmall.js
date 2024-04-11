import React from "react";
import api from "@/services/api";
import styles from "../main.module.css";
function Mainsmall({ first, last }) {
  const itemurl = "http://localhost:3001/mainitem";

  // API 호출
  const iu = api(itemurl);

  const slicedData = iu.slice(first - 1, last);

  return (
    <>
      {slicedData.map((m) => (
        <div className={styles.mainitem1}>
          <img className={styles.img1} alt="12" src={m.img} />
          <div>{m.name}</div>
        </div>
      ))}
    </>
  );
}

export default Mainsmall;
