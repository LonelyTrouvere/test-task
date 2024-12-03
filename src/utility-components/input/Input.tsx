import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import './Input.css'

function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return <input className='custom-input' {...props}/>
}

export default Input