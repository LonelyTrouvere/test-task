import Input from '../input/Input'
import './LabeledInput.css'
import { Props } from './type'

function LabeledInput({children, label, inputProps}: Props) {
    return <div>
        <label htmlFor={label} className='custom-inputs-label'>{children}</label>
        <Input name={label} {...inputProps}/>
    </div>
}

export default LabeledInput