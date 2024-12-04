import { forwardRef } from 'react'
import './Input.css'
import { InputProps } from './type'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { error, svg } = props
    return (
    <div className='custom-input-wrapper'>
        <input 
            className='custom-input'
            style={{
                borderColor: error ? 'red' : '#C7C9D1'
            }}
            ref={ref}
            {...props}
        />
        { svg ? <img className='input-svg' src={svg}/> : <></> }
    </div>
    )
})

export default Input