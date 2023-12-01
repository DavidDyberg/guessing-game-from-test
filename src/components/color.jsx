import React from "react";

const ColorButton = ({ color, handleClick }) => {
  const bgColor = "#" + color;

  return (
    <button
      style={{ backgroundColor: bgColor, padding: "10px", margin: "5px" }}
      onClick={() => handleClick(color)}>
      {color}
    </button>
  );
};

export default ColorButton;
