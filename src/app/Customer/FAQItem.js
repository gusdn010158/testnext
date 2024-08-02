import React from "react";
import styled from "styled-components";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FAQItem = ({ item, open, handleOpen }) => {
  return (
    <div key={item.id}>
      <Btncompo onClick={handleOpen}>
        <Compo>
          <Cspan>Q</Cspan>
          {item.text}
        </Compo>
        <Combtn>{open ? <BiChevronUp /> : <BiChevronDown />}</Combtn>
      </Btncompo>
      {open && <Compopen>{item.open}</Compopen>}
    </div>
  );
};

export default FAQItem;

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
const Combtn = styled.span`
  font-size: 40px;
`;
const Compo = styled.span`
  font-size: 16px;
`;
