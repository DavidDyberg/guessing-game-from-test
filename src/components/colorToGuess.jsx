import React from 'react';

const ColorToGuess = ({ correctColor }) => {
  console.log({correctColor})
  return (
    <p data-testid="color-to-guess" style={{ backgroundColor: correctColor }}>
      Färg
    </p>
  );
};

export default ColorToGuess;
