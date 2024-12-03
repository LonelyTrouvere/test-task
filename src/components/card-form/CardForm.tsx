import './CardForm.css'
import LabeledInput from "../../utility-components/labeled-input/LabeledInput";

function CardForm() {
    return  <div className="payment-area__card">
        <LabeledInput 
            label='card'
            inputProps={{
                placeholder: '1234 1234 1234 1234'
            }}
        >
            Card Number
        </LabeledInput>
        <div className='payment-area__input-wrappers'>
            <LabeledInput 
                label='month'
                inputProps={{
                    placeholder: 'MM/YY'
                }}
            >
                Expiration Date
            </LabeledInput>
            <LabeledInput 
                label='cvc'
                inputProps={{
                    placeholder: '• • •'
                }}
            >
                CVC
            </LabeledInput>
        </div>
    </div>
}

export default CardForm