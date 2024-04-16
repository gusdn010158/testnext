import React from "react";
import api from "@/services/api";
import styles from "../Store/store.module.css";
function StoreMain({ first, last, itemWidth, itemheight }) {
  const fristurl = "http://localhost:3001/store";
  const friststoredata = api(fristurl);

  const store = friststoredata.slice(first - 1, last);

  return (
    <div className={styles.storeflex}>
      {store.map((m) => (
        <div
          className={styles.storeitem}
          style={{ width: itemWidth, height: itemheight }}
        >
          <div className={styles.storeimgitem}>
            <img className={styles.storeimg} src={m.img} />
          </div>
          <div className={styles.storetitle}>
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
