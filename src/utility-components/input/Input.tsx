import { forwardRef } from 'react'
import './Input.css'
import { InputProps } from './type'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { error } = props
    return <input className='custom-input' {...props} ref={ref} style={{
        borderColor: error ? 'red' : '#C7C9D1'
    }}/>
})

export default Input