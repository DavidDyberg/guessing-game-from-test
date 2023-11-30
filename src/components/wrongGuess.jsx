import { useState } from "react"

const WrongGuess = () => {
    const [wrongGuess, setWrongGuess] = useState(false)
    return(
        <div>
            {wrongGuess && <p>Wrong guess</p>}
        </div> 
    )
}

export default WrongGuess