import React from 'react';

const ColorButton = ({ correctColor, handleClick }) => {

  console.log({correctColor})

  return (
    <button style={{ backgroundColor: correctColor }} onClick={() => handleClick(correctColor)}>
      {correctColor}
    </button>
  );
};

export default ColorButton;
