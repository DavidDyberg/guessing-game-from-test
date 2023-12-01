import React from 'react';

const ColorButton = ({ correctColor, handleClick }) => {

  return (
    <button style={{ backgroundColor: correctColor, padding: '10px', margin: '5px' }} onClick={handleClick}>
      {correctColor}
    </button>
  );
};

export default ColorButton;
