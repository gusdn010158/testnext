import styles from "../main.module.css";
import React from "react";
import api from "@/services/api";
function Mid({ last, first }) {
  const storeurl = "http://localhost:3001/store";

  const datastore = api(storeurl);
  const data = datastore.slice(first - 1, last);

  return (
    <>
      {data.map((item) => (
        <div className={styles.Miditem}>
          <img className={styles.Midimg} alt="12" src={item.img} />
          <div className={styles.Midtitle}>{item.title}</div>
        </div>
      ))}
    </>
  );
}

export default Mid;
