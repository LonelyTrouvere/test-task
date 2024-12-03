import { forwardRef } from 'react'
import Input from '../input/Input'
import './LabeledInput.css'
import { Props } from './type'

const LabeledInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {children, label, inputProps} = props
    return <div>
        <label htmlFor={label} className='custom-inputs-label'>{children}</label>
        <Input name={label} {...inputProps} ref={ref}/>
    </div>
})

export default LabeledInput