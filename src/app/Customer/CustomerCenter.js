import React from "react";
import styled from "styled-components";
import { FiPhone } from "react-icons/fi";

const CustomerCenter = () => {
  const questions = [
    "배송은 얼마나 걸리나요?",
    "주문 취소는 어떻게 하나요?",
    "제품의 자세한 정보를 알고 싶어요.",
    "제품이 불량일 때는?",
    "카카오 계정으로 로그인하면 이미 가입되었다고 합니다.",
  ];

  return (
    <Container>
      <LeftSection>
        <h2>무엇을 도와드릴까요?</h2>
        {questions.map((question, index) => (
          <Question key={index}>
            <Circle>Q</Circle>
            {question}
          </Question>
        ))}
      </LeftSection>
      <RightSection>
        <h3>
          <CenterLabel>고객센터</CenterLabel> 09:00 ~ 18:00
        </h3>
        <ul>
          <li>평일: 전체 문의 상담</li>
          <li>
            토요일, 공휴일: 오늘의집 직접배송, 이사/시공/제품설치 문의 상담
          </li>
          <li>일요일: 휴무</li>
        </ul>
        <h3>
          <FiPhone /> 1670-0876
        </h3>
        <ButtonContainer>
          <PrimaryButton>1:1 카톡 상담하기</PrimaryButton>
          <ButtonGroup>
            <SecondaryButton>이메일 문의하기</SecondaryButton>
            <TertiaryButton>이메일 주소 복사하기</TertiaryButton>
          </ButtonGroup>
        </ButtonContainer>
      </RightSection>
    </Container>
  );
};

export default CustomerCenter;

const Container = styled.div`
  display: flex;
  padding: 50px;
  height: 330px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RightSection = styled.div`
  flex: 0.8;
  border-radius: 10px;
  padding: 30px;
  background-color: rgb(240, 240, 240);

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    font-size: 12px;
    color: gray;
  }

  h3 {
    color: skyblue;
    margin-top: 10px;
  }
`;

const Question = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Circle = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  border-radius: 50%;
  color: skyblue;
  border: 1px solid rgb(240, 240, 240);
`;

const CenterLabel = styled.span`
  color: black;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const PrimaryButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: skyblue;
  border: none;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(51, 131, 163);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SecondaryButton = styled.button`
  width: 48%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid skyblue;
  color: skyblue;
  background-color: transparent;
  cursor: pointer;
`;

const TertiaryButton = styled.button`
  width: 48%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgb(200, 200, 200);
  background-color: transparent;
  cursor: pointer;
`;
