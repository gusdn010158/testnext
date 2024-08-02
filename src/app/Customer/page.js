"use client";
import React, { useState } from "react";
import api from "@/services/api";
import styled from "styled-components";
import CustomerCenter from "./CustomerCenter";
import CustomerFAQ from "./CustomerFAQ";

function Customer() {
  const url = "http://localhost:3001/Customer";
  const data = api(url);

  const [open, setOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "전체"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <Custom>
      <CustomerCenter />
      <CustomerFAQ
        data={filteredData}
        open={open}
        handleOpen={handleOpen}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </Custom>
  );
}

export default Customer;

const Custom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
