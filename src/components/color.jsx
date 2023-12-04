import React from "react";

const ColorButton = ({ color, handleClick }) => {
  const bgColor = "#" + color;

  return (
    <button className="rounded-md px-3 py-2 md:m-2 my-1 bg-slate-800 text-white"
      onClick={() => handleClick(color)}>
      {color}
    </button>
  );
};

export default ColorButton;
