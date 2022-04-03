import React from "react";
import "./style.css";
import Keyboard from "./Keyboard";

export const KeyboardIcon = () => {
  return (
    <div className="bg-image" style={{ maxWidth: "22rem" }}>
      <Keyboard
        className="bg-image hover-overlay shadow-1-strong rounded"
        style={{ maxWidth: "22rem" }}
        rippleTag="div"
        rippleColor="light"
      />
      <div
        className="masker"
        style={{ backgroundColor: "rgba(52, 0, 0, 0.6)" }}
      ></div>
    </div>
  );
};
