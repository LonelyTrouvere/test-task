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
    const [clicked, setClicked] = useState<boolean>(false)

    return <Button 
        className="start-trial-button"
        {...props}
        onMouseDown={() => setMouseState('down')}
        onMouseUp={() => {
            setMouseState('up')
            setClicked(true)
        }}
        onMouseEnter={() => setMouseState('enter')}
        onMouseLeave={() => setMouseState('leave')}
        style={{
            transition: 'all 80ms ease-in',
            ...stateButtonStyle[mouseState],
        }}
    >
        <LeveledSpan 
            level='first' 
            style={{
                transition: 'all 120ms ease-out',
                fontSize: '16px', 
                color: 'white',
                display: 'inline-block',
                position: 'absolute',
                left: 0,
                right: 0,
                marginInline: 'auto',
                opacity: clicked ? 0 : 1,
                bottom: clicked ? 'calc(25% + 2px)' : '25%'
            }}
        >
            Start Trial
        </LeveledSpan>
        <LeveledSpan 
            level='first' 
            style={{
                transition: 'all 120ms ease-out',
                fontSize: '16px', 
                color: 'white',
                display: 'inline-block',
                position: 'absolute',
                left: 0,
                right: 0,
                marginInline: 'auto',
                opacity: clicked ? 1 : 0,
                bottom: clicked ? '25%' : 'calc(25% - 2px)'
            }}
        >
            Proccesing payment
        </LeveledSpan>
    </Button>
}

export default StartTrialButton