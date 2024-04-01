import React from "react";
import api from "@/services/api";
import styles from "../Store/store.module.css";
function StoreMid() {
  const secondurl = "http://localhost:3001/store2";

  const secondstoredata = api(secondurl);
  return (
    <div className={styles.storeflex}>
      {secondstoredata.map((m) => (
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
  );
}

export default StoreMid;
