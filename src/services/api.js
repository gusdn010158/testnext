import { useState, useEffect } from "react";
import axios from "axios";

const useDataFetching = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  return data;
};

export default useDataFetching;
