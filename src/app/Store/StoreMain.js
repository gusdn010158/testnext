import React from "react";
import api from "@/services/api";
import styles from "../Store/store.module.css";
function StoreMain() {
  const fristurl = "http://localhost:3001/store";
  const friststoredata = api(fristurl);
  return (
    <div className={styles.storeflex}>
      {friststoredata.map((m) => (
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

export default StoreMain;
