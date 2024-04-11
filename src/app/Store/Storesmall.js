import React from "react";
import api from "@/services/api";
import styles from "../Store/store.module.css";
function Storesmall({ first, last }) {
  const smallurl = "http://localhost:3001/mainitem";
  const smalldata = api(smallurl);

  const slicedData = smalldata.slice(first - 1, last);
  return (
    <div className={styles.stitem}>
      {slicedData.map((m) => (
        <div className={styles.sti}>
          <img className={styles.sticon} src={m.img} />
          <div>{m.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Storesmall;
//props를 이용해서 데이터를 다르게 보여주는 방법 찾아보기
