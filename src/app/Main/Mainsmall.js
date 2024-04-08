import React from "react";
import api from "@/services/api";
import styles from "../main.module.css";
function Mainsmall({ img, name }) {
  return (
    <div className={styles.mainitem1}>
      <img className={styles.img1} alt="12" src={img} />
      <div>{name}</div>
    </div>
  );
}

export default Mainsmall;
