
const CorrectGuessesInARow = ({correctGuessesInARow}) => {

  return (
    <div className="flex flex-row justify-center p-2 text-xl">
      <p data-testid="correct-guesses-in-a-row-text">Correct guesses in a row: </p>
      <p data-testid="correct-guesses-in-a-row-value">{correctGuessesInARow}</p>
    </div>
  );
};

export default CorrectGuessesInARow;
