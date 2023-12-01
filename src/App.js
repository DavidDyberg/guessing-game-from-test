import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CorrectGuessesInARow from './components/correctGuessesInARow';
import ColorToGuess from './components/colorToGuess';
import ColorOptions from './components/colorOptions';
import mockColors from './utils'; // Ensure correct path to your colors

const getRandomColors = () => {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * mockColors.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes.map(index => mockColors[index]);
};

function App() {
  const [correctColor, setCorrectColor] = useState(null);
  const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [colors, setColors] = useState(getRandomColors());

  // Update correctColor when colors state changes
  useEffect(() => {
    setCorrectColor(getCorrectColor());
  }, [correctGuessesInARow]);

  const getCorrectColor = () => {
    if (colors.length > 0) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
    return null; // Return null or handle empty colors array case
  };

  return (
    <div className="App">
      <Header />
      <CorrectGuessesInARow correctGuessesInARow={correctGuessesInARow} />
      <ColorToGuess correctColor={correctColor} />
      <ColorOptions
        colors={colors} // Pass colors to ColorOptions component
        correctColor={correctColor}
        setCorrectGuessesInARow={setCorrectGuessesInARow}
        setWrongGuess={setWrongGuess}
      />
    </div>
  );
}

export default App;
