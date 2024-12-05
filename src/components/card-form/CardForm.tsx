import './CardForm.css'
import LabeledInput from "../../utility-components/labeled-input/LabeledInput";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from './type';
import cardValidator from 'card-validator';
import StartTrialButton from '../../utility-components/start-trial-button/StartTrialButton';
import infoSvg from '../../assets/info.svg'
import { useState } from 'react';
import { payment } from '../../api/payment';
import { sleep } from '../../utilities/sleep';

// validates {number}{number}/{number}{number}
const dateRegex = /^\d{2}\/\d{2}/
// validates 3 numbers in a row
const cvcRegex = /^\d{3}$/

function CardForm() {
    const [inputSuccsessfull, setinputSuccsessfull] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        shouldFocusError: false
    });
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setinputSuccsessfull(true)
        // simulate heavy procces
        await sleep(5000)
        const response = await payment(data)
        setinputSuccsessfull(false)
        if(response.success){
            alert('Payment successfull!')
        } else {
            alert('Server error occured')
        }
    }
    
    const cardRegister = register('card', {
        required: 'Credit card number required',
        validate: (value) => {
            const validated = cardValidator.number(value)
            if(!validated.isPotentiallyValid){
                return 'Invalid credit card number'
            }

            return validated.isValid
        }
    })
    const dateRegister = register('date', {
        required: 'Expiration date required',
        pattern: {
            message: 'Invalid Expiration date',
            value: dateRegex
        }
    })
    const cvcRegister = register('cvc', {
        required: 'CVC required',
        pattern: {
            message: 'Invalid CVC',
            value: cvcRegex
        }
    })

    return  <form className="payment-area__card-form" onSubmit={handleSubmit(onSubmit)}>
        <LabeledInput 
            label='card'
            inputProps={{
                placeholder: '1234 1234 1234 1234',
                error: errors.card?.message,
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
                    error: errors.date?.message,
                    ...dateRegister,
                }}
                ref={dateRegister.ref}
            >
                Expiration Date
            </LabeledInput>
            <LabeledInput 
                label='cvc'
                inputProps={{
                    placeholder: '• • •',
                    error: errors.cvc?.message,
                    ...cvcRegister,
                    svg: infoSvg
                }}
                ref={cvcRegister.ref}
            >
                CVC
            </LabeledInput>
        </div>
        <StartTrialButton type='submit' success={inputSuccsessfull}/>
    </form>
}

export default CardForm