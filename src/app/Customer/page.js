"use client";
import React from "react";
import api from "@/services/api";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
function Customer() {
  const url = "http://localhost:3001/Customer";

  const data = api(url);
  const durl = "http://localhost:3001/Custom";

  const ddata = api(durl);
  return (
    <Custom>
      <Ctop>
        <Ctoplf>
          <h2>무엇을 도와드릴까요?</h2>
          <div>배송은 얼마나 걸리나요?</div>
          <div>주문 취소는 어떻게 하나요?</div>
          <div>제품의 자세한 정보를 알고 싶어요.</div>
          <div>제품이 불량일 때는?</div>
          <div>카카오 계정으로 로그인하면 이미 가입되었다고 합니다.</div>
        </Ctoplf>
        <Ctoprt>
          <h3>고객센터 09:00 ~ 18:00 </h3>
          <li>평일: 전체 문의 상담</li>
          <li>
            토요일, 공휴일: 오늘의집 직접배송, 이사/시공/제품설치 문의 상담{" "}
          </li>
          <li>일요일: 휴무</li>
          <h3>1670-0876</h3>
          <Btndiv>
            <Topbtn>1:1 카톡 상담하기</Topbtn>
            <Bt>
              <Btbtn>이메일 문의하기</Btbtn>
              <Btbtn>이메일 주소 복사하기</Btbtn>
            </Bt>
          </Btndiv>
        </Ctoprt>
      </Ctop>
      <Cbt>
        <CbtTop>
          {ddata.map((item) => (
            <CbtTopsp> {item.name}</CbtTopsp>
          ))}
        </CbtTop>
        <Cbtdiv>
          {data.map((item) => (
            <Btncompo>
              <Compo>
                <CgSearch />
                {item.text}
              </Compo>
              <Combtn>
                <AiOutlineDown />
              </Combtn>
            </Btncompo>
          ))}
        </Cbtdiv>
      </Cbt>
    </Custom>
  );
}

export default Customer;
const Btncompo = styled.button`
  border-bottom: 1px solid gray;
  border-top: none;
  border-right: none;
  border-left: none;
  width: 1000px;
  height: 100px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
`;
const Cbtdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Combtn = styled.span``;
const Compo = styled.span``;
const Btndiv = styled.div`
  width: 100%;
`;
const Topbtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: skyblue;
  border: none;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: blue;
  }
`;
const Bt = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;
const Btbtn = styled.button`
  width: 48%;
  height: 40px;
  border-radius: 5px;
  border: none;
`;
const Custom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Ctop = styled.div`
  display: flex;
  height: 300px;
  padding: 50px;
`;
const Ctoplf = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const Ctoprt = styled.div`
  border-radius: 10px;
  width: 400px;
  height: 300px;
  padding: 30px;
  background-color: gray;
`;
const Cbt = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
`;
const CbtTop = styled.div`
  display: flex;
  margin: 50px 0px 50px 0px;
`;
const CbtTopsp = styled.span`
  background-color: gray;
  border-radius: 25px;
  padding: 10px;
  margin-left: 20px;
`;
