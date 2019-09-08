import React from "react";

import "./Button.css";

export default ({
  children,
  className = "",
  style,
  onClick,
  styled = true,
  hover = true,
  inverted = false
}) => {
  return (
    <button
      className={`sb-de-button ${styled ? "sb-de-button-style" : ""} ${
        hover ? "sb-de-button-hover" : ""
      } ${inverted ? "sb-de-button-style-inverted" : ""} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
