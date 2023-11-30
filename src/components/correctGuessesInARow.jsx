import { useState } from "react";

const CorrectGuessesInARow = () => {
  const [correctGuessesInARow, setCorrectGuessesInARow] = useState(0);

  return (
    <>
      <p data-testid="correct-guesses-in-a-row-text">Correct guesses in a row:</p>
      <p data-testid="correct-guesses-in-a-row-value">{correctGuessesInARow}</p>
    </>
  );
};

export default CorrectGuessesInARow;
