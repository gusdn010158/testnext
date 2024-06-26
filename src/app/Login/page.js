import React from "react";
import RootLayout from "../layout";

import styles from "./Login.module.css";
import Logintoast from "./Logintoast";
const Page = () => {
  return (
    <RootLayout withHeaderAndFooter={false}>
      <div className={styles.Login}>
        <div className={styles.loginflex}>
          <a href="/">
            <img
              className={styles.logintoplogo}
              alt="logo"
              src="https://ohstory.io/wp-content/uploads/2022/11/1_-Ohouse_mark_horizontal_black.png"
            ></img>
          </a>
          <form className={styles.loginform}>
            <input placeholder="이메일"></input>
            <input placeholder="비밀번호"></input>
            <button>로그인</button>
          </form>
          <div className={styles.qlalf}>
            <span className="font-roboto-400">비밀번호 재설정</span>
            <span className="font-roboto-400">회원가입</span>
          </div>
          <div className={styles.Loginmid}>
            <div className={styles.Loginmidtxt1}>
              SNS계정으로 간편 로그인/회원가입
            </div>
            <div className={styles.Loginmidlogo}>
              <img
                alt="1"
                src="https://blog.kakaocdn.net/dn/UGS0q/btree5Viurw/l07AH1VgWJHm4stsAHLdL0/img.png"
              />

              <img
                alt="2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/2048px-KakaoTalk_logo.svg.png"
              />
              <img
                alt="3"
                src="https://w7.pngwing.com/pngs/344/368/png-transparent-naver-round-logo-search-engines-thumbnail.png"
              />
            </div>
            <div className={styles.Loginmidtxt2}>
              로그인에 문제가 있으신가요?
            </div>
          </div>
          <Logintoast />
        </div>
      </div>
    </RootLayout>
  );
};

export default Page;
