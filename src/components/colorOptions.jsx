import Color from "./color"

const ColorOptions = ({colors}) => {
    return (
        <div data-testid="color-options">
        {colors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </div>
    )
}

export default ColorOptions