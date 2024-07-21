"use client";
import React, { useState } from "react";
import api from "@/services/api";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";
import { BiChevronUp } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
function Customer() {
  const url = "http://localhost:3001/Customer";

  const data = api(url);
  const durl = "http://localhost:3001/Custom";

  const ddata = api(durl);
  const [open, setOpen] = useState(null); // 열린 아이템의 id를 저장할 state

  const handleOpen = (id) => {
    setOpen(open === id ? null : id); // 클릭한 아이템의 id가 이미 열려있으면 닫고, 아니면 열기
  };
  return (
    <Custom>
      <Ctop>
        <Ctoplf>
          <h2 className="font-noto_sans_kr">무엇을 도와드릴까요?</h2>
          <div>
            <Cspan>Q</Cspan>배송은 얼마나 걸리나요?
          </div>
          <div>
            {" "}
            <Cspan>Q</Cspan>주문 취소는 어떻게 하나요?
          </div>
          <div>
            {" "}
            <Cspan>Q</Cspan>제품의 자세한 정보를 알고 싶어요.
          </div>
          <div>
            {" "}
            <Cspan>Q</Cspan>제품이 불량일 때는?
          </div>
          <div>
            {" "}
            <Cspan>Q</Cspan>카카오 계정으로 로그인하면 이미 가입되었다고 합니다.
          </div>
        </Ctoplf>
        <Ctoprt>
          <h3 className="font-noto_sans_kr">
            <Ctoprtspan>고객센터</Ctoprtspan> 09:00 ~ 18:00{" "}
          </h3>
          <li>평일: 전체 문의 상담</li>
          <li>
            토요일, 공휴일: 오늘의집 직접배송, 이사/시공/제품설치 문의 상담{" "}
          </li>
          <li>일요일: 휴무</li>
          <h3>
            {" "}
            <FiPhone />
            1670-0876
          </h3>
          <Btndiv>
            <Topbtn>1:1 카톡 상담하기</Topbtn>
            <Bt>
              <Btbtn>이메일 문의하기</Btbtn>
              <Btbtn2>이메일 주소 복사하기</Btbtn2>
            </Bt>
          </Btndiv>
        </Ctoprt>
      </Ctop>
      <Cbt>
        <CbtTop>
          {ddata.map((item) => (
            <CbtTopsp ref="dd"> {item.name}</CbtTopsp>
          ))}
        </CbtTop>
        <Cbtdiv>
          {data.map((item) => (
            <div key={item.id}>
              <Btncompo onClick={() => handleOpen(item.id)}>
                <Compo>
                  <Cspan>Q</Cspan>
                  {item.text}
                </Compo>
                <Combtn>
                  {open === item.id ? <BiChevronUp /> : <BiChevronDown />}
                </Combtn>
              </Btncompo>
              {open === item.id && <Compopen>{item.open}</Compopen>}
            </div>
          ))}
        </Cbtdiv>
      </Cbt>
    </Custom>
  );
}

export default Customer;
const Ctoprtspan = styled.span`
  color: black;
`;
const Cspan = styled.span`
  padding: 5px 7px 5px 7px;
  margin-right: 10px;
  border-radius: 50%;
  color: skyblue;
  border: 1px solid rgb(240, 240, 240);
`;
const Compopen = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgb(240, 240, 240);
  height: auto;
`;
const Btncompo = styled.button`
  border-bottom: 1px solid rgb(240, 240, 240);
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

const Combtn = styled.span`
  font-size: 40px;
`;
const Compo = styled.span`
  font-size: 16px;
`;
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
    background-color: rgb(51, 131, 163);
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
  color: skyblue;
  border: 1px solid skyblue;
`;
const Btbtn2 = styled.button`
  width: 48%;
  height: 40px;
  border-radius: 5px;
  border: none;
  border: 1px solid rgb(200, 200, 200);
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
  background-color: rgb(240, 240, 240);
  li {
    font-size: 12px;
    color: gray;
  }
  h3 {
    color: skyblue;
  }
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
const CbtTopsp = styled(Link)`
  background-color: rgb(240, 240, 240);
  border-radius: 25px;
  padding: 10px;
  margin-left: 20px;
`;
