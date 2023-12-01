import React from 'react';
import ColorButton from './color'; // Assuming Color component is defined in Color.jsx
import mockColors from "../utils"

const ColorOptions = ({ correctColor, setCorrectGuessesInARow, setWrongGuess, colors }) => {

  const handleClick = (guessedColor) => {
    if (guessedColor === correctColor) {
      setCorrectGuessesInARow(prevCount => prevCount + 1);
      setWrongGuess(false)
    } else {
      setCorrectGuessesInARow(0);
      setWrongGuess(true)
    }
  };

  return (
    <div>
      {colors.map((color, index) => (
        <button key={index} style={{ backgroundColor: color, padding: '10px', margin: '5px' }} onClick={() => handleClick(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorOptions;