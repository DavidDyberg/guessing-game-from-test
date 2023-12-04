import React, { useState, useEffect } from "react";
import Header from "./components/header";
import CorrectGuessesInARow from "./components/correctGuessesInARow";
import ColorToGuess from "./components/colorToGuess";
import ColorOptions from "./components/colorOptions";
import mockColors from "./utils";
import WrongGuess from "./components/wrongGuess";

const getRandomColors = () => {
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * mockColors.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes.map((index) => mockColors[index]);
};

function App() {
  const [correctColor, setCorrectColor] = useState(null);
  const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(false);
  const [colors, setColors] = useState(getRandomColors());

  useEffect(() => {
    setCorrectColor(getCorrectColor());
  }, [colors, correctGuessesInARow]);

  const getCorrectColor = () => {
    if (colors.length > 0) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
    return null;
  };

  useEffect(() => {
    setColors(getRandomColors());
  }, [correctGuessesInARow]);

  return (
    <div data-testid="app" className="text-center text-white">
      <Header />
      <CorrectGuessesInARow correctGuessesInARow={correctGuessesInARow} />
      <ColorToGuess correctColor={correctColor} />
      <ColorOptions
        colors={colors}
        correctColor={correctColor}
        setCorrectGuessesInARow={setCorrectGuessesInARow}
        setWrongGuess={setWrongGuess}
      />
      {wrongGuess && <WrongGuess />}{" "}
    </div>
  );
}

export default App;
