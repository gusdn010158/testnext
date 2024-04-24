import React from "react";
import api from "@/services/api";
import Link from "next/link";
import styles from "../Store/store.module.css";
function StoreMain({ first, last, itemWidth, itemheight }) {
  const fristurl = "http://localhost:3001/store";
  const friststoredata = api(fristurl);

  const store = friststoredata.slice(first - 1, last);

  return (
    <div className={styles.storeflex}>
      {store.map((m) => (
        <Link
          href={`/Detail/${m.id}`}
          className={styles.storeitem}
          style={{ width: itemWidth, height: itemheight }}
        >
          <div className={styles.storeimgitem}>
            <img className={styles.storeimg} src={m.img} />
          </div>
          <div className={styles.storetitle}>
            <div className={styles.storetitle1}>{m.name}</div>
            <div className={styles.storetitle2}>{m.text}</div>
            <div className={styles.storetitle3}>{m.price}</div>
            <div className={styles.emr}>특가</div>
            <div className={styles.gkf}>무료배송</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StoreMain;
