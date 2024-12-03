import LabeledInput from '../../utility-components/labeled-input/LabeledInput'
import LeveledSpan from '../../utility-components/leveled-span/LeveledSpan'
import LegalInfo from '../legal-info/LegalInfo'
import './PaymentArea.css'

function PaymentArea() {
    return <div className="payment-area">
        <div className="payment-area__payment">
            <div className="payment-area__order">
                <LeveledSpan level='first' style={{fontSize: '32px', lineHeight: '40px', display: 'block'}}>5 days free</LeveledSpan>
                <LeveledSpan level='second' style={{fontSize: '16px', lineHeight: '24px',}}>then 299.99 UAH per 14 days</LeveledSpan>
            </div>
            <div className="payment-area__card">
                <LabeledInput label='card'>Card Number</LabeledInput>
                <div className='payment-area__input-wrappers'>
                    <LabeledInput label='month'>Expiration Date</LabeledInput>
                    <LabeledInput label='cvc'>CVC</LabeledInput>
                </div>
            </div>
        </div>
        <LegalInfo />
    </div>
}

export default PaymentArea