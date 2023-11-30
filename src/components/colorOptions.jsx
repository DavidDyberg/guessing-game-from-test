import Color from "./color"

const ColorOptions = ({colors}) => {
    return (
        <div data-testid="color-options">
            <Color/>
            <Color/>
            <Color/>
      </div>
    )
}

export default ColorOptions