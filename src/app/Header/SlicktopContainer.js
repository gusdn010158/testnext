// SlicktopContainer.js
import React from "react";
import api from "@/services/api";
import SlickUIComponent from "./SlickUIComponent";

const SlicktopContainer = () => {
  const data = api("http://localhost:3001/mainitem");

  return <SlickUIComponent data={data} />;
};

export default SlicktopContainer;
