"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
function page() {
  return (
    <Cart>
      <img
        alt="img"
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/assets/163703569663018673.png"
      />
      <CartLink className="font-roboto-400" href="/Store">
        상품 담으러 가기
      </CartLink>
    </Cart>
  );
}

export default page;
const CartLink = styled(Link)`
  color: white;
  margin-top: 50px;
  text-decoration: none;
  border-radius: 5px;
  width: 220px;
  height: 50px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: blue;
  }
`;
const Cart = styled.div`
  display: flex;
  background-color: rgb(219, 219, 219);
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
