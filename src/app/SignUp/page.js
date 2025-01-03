// import React from "react";
// import styles from "./signup.module.css";
// import RootLayout from "../layout";
// import Link from "next/link";

// function SignupPage() {
//   return (
//     <RootLayout withHeaderAndFooter={false}>
//       <a href="/">
//         <img
//           className={styles.signuptoplogo}
//           alt="logo"
//           src="https://ohstory.io/wp-content/uploads/2022/11/1_-Ohouse_mark_horizontal_black.png"
//         />
//       </a>
//       <div className={styles.signup}>
//         <div className={styles.signuplogo}>
//           <h3>회원가입</h3>
//         </div>
//         <div className={styles.signuptop}>
//           <div className="font-roboto-400">SNS계정으로 간편하게 회원가입</div>
//           <div className={styles.signuptoplogo2}>
//             <img
//               alt="1"
//               src="https://blog.kakaocdn.net/dn/UGS0q/btree5Viurw/l07AH1VgWJHm4stsAHLdL0/img.png"
//             />
//             <img
//               alt="2"
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/2048px-KakaoTalk_logo.svg.png"
//             />
//             <img
//               alt="3"
//               src="https://w7.pngwing.com/pngs/344/368/png-transparent-naver-round-logo-search-engines-thumbnail.png"
//             />
//           </div>
//         </div>
//         <div className={styles.signupmid}>
//           <h4>이메일</h4>
//           <form>
//             <input className={styles.signupinput1} placeholder="이메일" />@
//             <select className={styles.signupinput2}>
//               <option>선택해주세요.</option>
//               <option value="banana">바나나</option>
//               <option value="apple">사과</option>
//               <option value="orange">오렌지</option>
//             </select>
//             <button className={styles.signupbutton1}>이메일 인증하기</button>
//           </form>
//           <form>
//             <h4>비밀번호</h4>
//             <div className={styles.signuptxt}>
//               영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
//             </div>
//             <input className={styles.signupinput} placeholder="비밀번호" />
//             <h4>비밀번호 확인</h4>
//             <input className={styles.signupinput} placeholder="비밀번호 확인" />
//             <h4>닉네임</h4>
//             <div className={styles.signuptxt}>
//               다른 유저와 겹치지 않도록 입력해주세요. (2~20자)
//             </div>
//             <input className={styles.signupinput} placeholder="닉네임" />
//             <h4>약관동의</h4>
//             <button className={styles.signupbutton}>회원가입하기</button>
//             <div className={styles.signupbt}>
//               <span>이미 아이디가 있으신가요?</span>
//               <Link href="/Login" className={styles.loginLink}>
//                 로그인
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </RootLayout>
//   );
// }

// export default SignupPage;
import React from "react";
import styled from "styled-components";
import RootLayout from "../layout";
import Link from "next/link";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 99vw;
  height: 100vh;
  margin-top: 70px;
`;

const LogoContainer = styled.div`
  width: 350px;
  height: 70px;
`;

const SignupTop = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgb(196, 196, 196);
`;

const SignupTopLogo = styled.img`
  object-fit: cover;
  width: 90px;
  height: 30px;
  position: absolute;
  left: 20px;
  top: 50px;
`;

const SignupMid = styled.div`
  width: 350px;
`;

const SignupTopLogos = styled.div`
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    margin: 20px;
    border-radius: 45%;
    width: 50px;
    height: 50px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid rgb(167, 167, 167);
  border-radius: 5px;
`;

const InputHalf = styled.input`
  width: 46%;
  height: 35px;
  border: 1px solid rgb(167, 167, 167);
  border-radius: 5px;
`;

const SelectHalf = styled.select`
  width: 47%;
  height: 40px;
  border: 1px solid rgb(167, 167, 167);
  border-radius: 5px;
`;

const Text = styled.div`
  color: gray;
  font-size: 13px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  font-weight: 600;
  color: white;
  font-size: 18px;
  background-color: skyblue;
  height: 50px;
  border: 0;
  border-radius: 5px;
`;

const GrayButton = styled(Button)`
  background-color: rgb(219, 219, 219);
  color: rgb(116, 116, 116);
  margin-top: 10px;
`;

const BottomText = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: black;
`;

const LoginLink = styled(Link)`
  color: blue;
  text-decoration: none;
  margin-left: 5px;
`;

function SignupPage() {
  return (
    <RootLayout withHeaderAndFooter={false}>
      <a href="/">
        <SignupTopLogo
          alt="logo"
          src="https://ohstory.io/wp-content/uploads/2022/11/1_-Ohouse_mark_horizontal_black.png"
        />
      </a>
      <SignupContainer>
        <LogoContainer>
          <h3>회원가입</h3>
        </LogoContainer>
        <SignupTop>
          <div>SNS계정으로 간편하게 회원가입</div>
          <SignupTopLogos>
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
          </SignupTopLogos>
        </SignupTop>
        <SignupMid>
          <h4>이메일</h4>
          <form>
            <InputHalf placeholder="이메일" />@
            <SelectHalf>
              <option>선택해주세요.</option>
              <option value="banana">바나나</option>
              <option value="apple">사과</option>
              <option value="orange">오렌지</option>
            </SelectHalf>
            <GrayButton>이메일 인증하기</GrayButton>
          </form>
          <form>
            <h4>비밀번호</h4>
            <Text>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</Text>
            <Input placeholder="비밀번호" />
            <h4>비밀번호 확인</h4>
            <Input placeholder="비밀번호 확인" />
            <h4>닉네임</h4>
            <Text>다른 유저와 겹치지 않도록 입력해주세요. (2~20자)</Text>
            <Input placeholder="닉네임" />
            <h4>약관동의</h4>
            <Button>회원가입하기</Button>
            <BottomText>
              <span>이미 아이디가 있으신가요?</span>
              <LoginLink href="/Login">로그인</LoginLink>
            </BottomText>
          </form>
        </SignupMid>
      </SignupContainer>
    </RootLayout>
  );
}

export default SignupPage;
