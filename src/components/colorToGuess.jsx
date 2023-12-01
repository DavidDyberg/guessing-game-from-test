import React from 'react';

const ColorToGuess = ({ correctColor }) => {
  console.log({correctColor})

  const bgColor = "#" + correctColor

  return (
    <p data-testid="color-to-guess" style={{ backgroundColor: bgColor }}>
      Färg
    </p>
  );
};

export default ColorToGuess;
