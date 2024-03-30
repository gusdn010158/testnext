"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const api = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  return data;
};

export default api;
