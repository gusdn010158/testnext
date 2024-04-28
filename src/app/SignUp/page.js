import React from "react";
import styles from "./signup.module.css";
import RootLayout from "../layout";
import Link from "next/link";

function page() {
  return (
    <RootLayout withHeaderAndFooter={false}>
      <Link href="/">
        <img
          className={styles.signuptoplogo}
          alt="logo"
          src="https://ohstory.io/wp-content/uploads/2022/11/1_-Ohouse_mark_horizontal_black.png"
        ></img>
      </Link>
      <div className={styles.signup}>
        <div className={styles.signuplogo}>
          {" "}
          <h3>회원가입</h3>
        </div>
        <div className={styles.signuptop}>
          <div className="font-roboto-400">SNS계정으로 간편하게 회원가입</div>
          <div className={styles.signuptoplogo2}>
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
        </div>
        <div className={styles.signupmid}>
          <h4>이메일</h4>
          <from>
            <input className={styles.signupinput1} placeholder="이메일"></input>
            @
            <select className={styles.signupinput2}>
              <option>선택해주세요.</option>
              <option value="banana">바나나</option>
              <option value="apple">사과</option>
              <option value="orange">오렌지</option>
            </select>
            <button className={styles.signupbutton1}>이메일 인증하기</button>
          </from>

          <from>
            <h4>비밀번호</h4>
            <div className={styles.signuptxt}>
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </div>
            <input
              className={styles.signupinput}
              placeholder="비밀번호"
            ></input>
            <h4>비밀번호 확인</h4>
            <input
              className={styles.signupinput}
              placeholder="비밀번호 확인"
            ></input>
            <h4>닉네임</h4>
            <div className={styles.signuptxt}>
              다른 유저와 겹치지 않도록 입력해주세요. (2~20자)
            </div>
            <input className={styles.signupinput} placeholder="닉네임"></input>
            <h4>약관동의</h4>

            <button className={styles.signupbutton}>회원가입하기</button>
            <div className={styles.signupbt}>
              <span>이미 아이디가 있으신가요?</span>
              <Link href="/Login" style={{ color: "black" }}>
                로그인
              </Link>
            </div>
          </from>
        </div>
      </div>
    </RootLayout>
  );
}

export default page;
