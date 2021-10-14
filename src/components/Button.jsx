import React from "react";

export const Button = ({ color = "black", click = () => {}, msg = "" }) => {
  return (
    <button
      onClick={click}
      className={`btn ${color === "black" ? "btn-primary" : "btn-secondary"}`}
    >
      {msg}
    </button>
  );
};
