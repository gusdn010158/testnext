import styles from "../main.module.css";
import React from "react";
import api from "@/services/api";
function Mid({ last, first, itemWidth }) {
  const storeurl = "http://localhost:3001/store";

  const datastore = api(storeurl);
  const data = datastore.slice(first - 1, last);

  return (
    <div className={`${styles.Midentire} font-roboto-400`}>
      {data.map((item) => (
        <div
          className={styles.Midcontents}
          style={{ width: itemWidth }}
          key={item.id}
        >
          <div className={styles.Midimgdiv}>
            <img className={styles.Midimg} alt="12" src={item.img} />
          </div>
          <div className={styles.Midtitle}>
            <div className={styles.Midtitled}>{item.txt}</div>
            <div>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mid;
