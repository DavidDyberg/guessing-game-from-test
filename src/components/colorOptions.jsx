import React from 'react';
import ColorButton from './color'; // Import your Color component

const ColorOptions = ({ correctColor, setCorrectGuessesInARow, setWrongGuess, colors }) => {

  const handleClick = (guessedColor) => {
    if (guessedColor === correctColor) {
      setCorrectGuessesInARow(prevCount => prevCount + 1);
      setWrongGuess(false);
    } else {
      setCorrectGuessesInARow(0);
      setWrongGuess(true);
    }
  };

  return (
    <div data-testid="color-options">
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          correctColor={color}
          handleClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorOptions;
