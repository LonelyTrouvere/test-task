import Button from "../button/Button"
import { ButtonProps } from "../button/type"
import LeveledSpan from "../leveled-span/LeveledSpan"
import { useState } from 'react'
import { MouseStates } from './type'
import { commonLabelStyle, stateButtonStyle } from './style'

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
        onMouseLeave={() => {
            if(!clicked){
                setMouseState('leave')
            }
        }}
        style={{
            transition: 'all 80ms ease-in',
            ...stateButtonStyle[mouseState],
        }}
    >
        <LeveledSpan 
            level='first' 
            style={{
                ...commonLabelStyle,
                opacity: clicked ? 0 : 1,
                bottom: clicked ? 'calc(25% + 2px)' : '25%'
            }}
        >
            Start Trial
        </LeveledSpan>
        <LeveledSpan 
            level='first' 
            style={{
                ...commonLabelStyle,
                opacity: clicked ? 1 : 0,
                bottom: clicked ? '25%' : 'calc(25% - 2px)'
            }}
        >
            Proccesing payment
        </LeveledSpan>
    </Button>
}

export default StartTrialButton