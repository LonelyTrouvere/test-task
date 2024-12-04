import './StartTrialButton.css'
import Button from "../button/Button"
import { ButtonProps } from "../button/type"
import LeveledSpan from "../leveled-span/LeveledSpan"

function StartTrialButton(props: ButtonProps) {
    return <Button 
        className="start-trial-button"
        {...props}
    >
        <LeveledSpan level='first' style={{fontSize: '16px', color: 'white'}}>Start Trial</LeveledSpan>
    </Button>
}

export default StartTrialButton