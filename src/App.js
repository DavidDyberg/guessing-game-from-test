import Header from './components/header';
import Color from './components/color';
import ColorOptions from './components/colorOptions';
import ColorToGuess from "./components/colorToGuess"
import CorrectGuessesInARow from "./components/correctGuessesInARow"

function App() {
  return (
    <div className="App">
      <Header/>
      <Color/>
      <ColorOptions/>
      <ColorToGuess/>
      <CorrectGuessesInARow/>

    </div>
  );
}

export default App;
