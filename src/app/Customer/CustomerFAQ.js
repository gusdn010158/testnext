import React from "react";
import styled from "styled-components";
import FAQItem from "./FAQItem";

const CustomerFAQ = ({
  data,
  open,
  handleOpen,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <Cbt>
      <CbtTop>
        {[
          "전체",
          "주문/결제",
          "배송관련",
          "취소/환불",
          "반품/교환",
          "증빙서류발급",
          "로그인/회원정보",
          "서비스/기타",
        ].map((category, index) => (
          <CbtTopsp
            key={index}
            onClick={() => handleCategoryChange(category)}
            isSelected={selectedCategory === category}
          >
            {category}
          </CbtTopsp>
        ))}
      </CbtTop>
      <Cbtdiv>
        {data.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            open={open === item.id}
            handleOpen={() => handleOpen(item.id)}
          />
        ))}
      </Cbtdiv>
    </Cbt>
  );
};

export default CustomerFAQ;

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
  background-color: ${(props) =>
    props.isSelected ? "skyblue" : "rgb(240, 240, 240)"};
  border-radius: 25px;
  margin-right: 10px;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
    color: white;
  }
`;
const Cbtdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
