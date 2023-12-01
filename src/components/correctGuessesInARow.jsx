
const CorrectGuessesInARow = ({correctGuessesInARow}) => {

  return (
    <>
      <p data-testid="correct-guesses-in-a-row-text">Correct guesses in a row:</p>
      <p data-testid="correct-guesses-in-a-row-value">{correctGuessesInARow}</p>
    </>
  );
};

export default CorrectGuessesInARow;
