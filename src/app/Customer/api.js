import axios from "axios";

const api = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    return [];
  }
};

export default api;
