import './CardForm.css'
import LabeledInput from "../../utility-components/labeled-input/LabeledInput";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from './type';
function CardForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

    const cardRegister = register('card', {
        required: 'Credit card number required'
    })
    const dateRegister = register('date', {
        required: 'Expiration date required'
    })
    const cvcRegister = register('cvc', {
        required: 'CVC required'
    })

    return  <form className="payment-area__card" onSubmit={handleSubmit(onSubmit)}>
        <LabeledInput 
            label='card'
            inputProps={{
                placeholder: '1234 1234 1234 1234',
                ...cardRegister
            }}
            ref={cardRegister.ref}
        >
            Card Number
        </LabeledInput>
        <div className='payment-area__input-wrappers'>
            <LabeledInput 
                label='date'
                inputProps={{
                    placeholder: 'MM/YY',
                    ...dateRegister
                }}
                ref={dateRegister.ref}
            >
                Expiration Date
            </LabeledInput>
            <LabeledInput 
                label='cvc'
                inputProps={{
                    placeholder: '• • •',
                    ...cvcRegister
                }}
                ref={cvcRegister.ref}
            >
                CVC
            </LabeledInput>
            <button type='submit'>Submit</button>
            {errors.card || errors.cvc || errors.date ? <span>loh</span> : <></>}
        </div>
    </form>
}

export default CardForm