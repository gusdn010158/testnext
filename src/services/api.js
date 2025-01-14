"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// api 함수 -> 커스텀 훅으로 변경
const useApi = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  return data;
};

export default useApi;
