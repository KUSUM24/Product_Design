import React from "react";
import "../Assets/css/main.css";
import { Left } from "./SubComponents/Left";
import { Middle } from "./SubComponents/Middle";

export const Main = () => {
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="secondary d-flex align-items-around">
        <Left />
        <Middle />
      </div>
    </div>
  );
};
