"use client";
import React, { useState } from "react";

import styles from "./Login.module.css";

function Logintoast() {
  const [toast, setToast] = useState(false);
  const onClick = () => {
    setToast(!toast);
  };
  return (
    <div className={styles.Loginbottom}>
      <div onClick={onClick}>비회원 주문 조회하기</div>
      {toast === true && (
        <form className={styles.loginform}>
          <input placeholder="주문번호"></input>
          <input placeholder="이메일"></input>
          <button>주문조회</button>
        </form>
      )}
      <div className={styles.Loginbottomtxt}>
        © bucketplace, Co., Ltd.. All Rights Reserved
      </div>
    </div>
  );
}

export default Logintoast;
