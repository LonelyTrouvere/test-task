import Button from "../button/Button"
import { ButtonProps } from "../button/type"
import LeveledSpan from "../leveled-span/LeveledSpan"
import { CSSProperties, useState } from 'react'
import { MouseStates } from './type'

const stateButtonStyle: Record<MouseStates, CSSProperties> = {
    down: {
        backgroundColor: 'hsl(144 97 23)',
        bottom: '-2px',
    },
    up: {
        backgroundColor: 'hsl(144 97 31)',
        bottom: '2px',
    },
    enter: {
        backgroundColor: 'hsl(144 97 31)',
        bottom: '2px',
    },
    leave: {
        backgroundColor: 'hsl(144 97 27)',
        bottom: '0',
    },
    neutral: {
        backgroundColor: 'hsl(144 97 27)',
        bottom: '0',
    },
}

function StartTrialButton(props: ButtonProps) {
    const [mouseState, setMouseState] = useState<MouseStates>('neutral');
    console.log(mouseState)
    return <Button 
        className="start-trial-button"
        {...props}
        onMouseDown={() => setMouseState('down')}
        onMouseUp={() => setMouseState('up')}
        onMouseEnter={() => setMouseState('enter')}
        onMouseLeave={() => setMouseState('leave')}
        style={stateButtonStyle[mouseState]}
    >
        <LeveledSpan level='first' style={{fontSize: '16px', color: 'white'}}>Start Trial</LeveledSpan>
    </Button>
}

export default StartTrialButton