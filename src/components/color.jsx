import React from "react";

const ColorButton = ({ color, handleClick }) => {
  const bgColor = "#" + color;

  return (
    <button className="rounded-md px-3 py-2 m-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
      onClick={() => handleClick(color)}>
      {color}
    </button>
  );
};

export default ColorButton;
