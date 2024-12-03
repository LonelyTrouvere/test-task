import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import './Input.css'

const Input = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>((props, ref) => {
    return <input className='custom-input' {...props} ref={ref}/>
})

export default Input