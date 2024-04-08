import styles from "../main.module.css";
import React from "react";

function Mid({ img, title }) {
  return (
    <div className={styles.Miditem}>
      <img className={styles.Midimg} alt="12" src={img} />
      <div>{title}</div>
    </div>
  );
}

export default Mid;
