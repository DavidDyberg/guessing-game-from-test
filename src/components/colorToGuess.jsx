
const ColorToGuess = () => {

  const mockCorrectColor = "A1F2GH";

  const correctColor = `#${mockCorrectColor}`

  return(
    <p data-testid="color-to-guess" style={{ backgroundColor: correctColor }}>Hej</p>
  )
}

export default ColorToGuess