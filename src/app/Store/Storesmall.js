import React from "react";
import api from "@/services/api";
import styles from "../Store/store.module.css";
function Storesmall({ first, last, itemWidth, itemHeight }) {
  const smallurl = "http://localhost:3001/mainitem";
  const smalldata = api(smallurl);

  const slicedData = smalldata.slice(first - 1, last);
  return (
    <div className={styles.stitem}>
      {slicedData.map((m) => (
        <div className={styles.sti} key={m.id}>
          <img
            className={styles.sticon}
            src={m.img}
            style={{ width: itemWidth, height: itemHeight }}
          />
          <div>{m.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Storesmall;
