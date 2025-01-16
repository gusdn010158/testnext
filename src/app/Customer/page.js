"use client";
import React, { useState, useEffect } from "react"; // useEffect 추가
import api from "./api";
import styled from "styled-components";
import CustomerCenter from "./CustomerCenter";
import CustomerFAQ from "./CustomerFAQ";

function Customer() {
  const url = "/api/data?type=Customer";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api(url);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
