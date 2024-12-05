import Button from "../button/Button"
import LeveledSpan from "../leveled-span/LeveledSpan"
import { useState } from 'react'
import { MouseStates, StartTrialButtonProps } from './type'
import { commonLabelStyle, stateButtonStyle } from './style'

function StartTrialButton({success, ...props}: StartTrialButtonProps) {
    const [mouseState, setMouseState] = useState<MouseStates>('neutral');
    return <Button 
        className="start-trial-button"
        {...props}
        onMouseDown={() => setMouseState('down')}
        onMouseUp={() => {
            setMouseState('up')
        }}
        onMouseEnter={() => setMouseState('enter')}
        onMouseLeave={() => {
            setMouseState('leave')
        }}
        style={{
            transition: 'all 80ms ease-in',
            ...stateButtonStyle[mouseState],
        }}
        disabled={success}
    >
        <LeveledSpan 
            level='first' 
            style={{
                ...commonLabelStyle,
                opacity: success ? 0 : 1,
                bottom: success ? 'calc(25% + 2px)' : '25%'
            }}
        >
            Pay 299.99 UAH
        </LeveledSpan>
        <LeveledSpan 
            level='first' 
            style={{
                ...commonLabelStyle,
                opacity: success ? 1 : 0,
                bottom: success ? '25%' : 'calc(25% - 2px)'
            }}
        >
            Proccesing payment
        </LeveledSpan>
    </Button>
}

export default StartTrialButton