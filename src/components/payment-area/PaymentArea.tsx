import Button from '../../utility-components/button/Button'
import LeveledSpan from '../../utility-components/leveled-span/LeveledSpan'
import CardForm from '../card-form/CardForm'
import LegalInfo from '../legal-info/LegalInfo'
import './PaymentArea.css'
import applePayLogo from '../../assets/apple-pay.svg'

function PaymentArea() {
    return <div className="payment-area">
        <div className="payment-area__payment">
            <div className="payment-area__order">
                <LeveledSpan level='first' style={{fontSize: '32px', lineHeight: '40px', display: 'block'}}>5 days free</LeveledSpan>
                <LeveledSpan level='second' style={{fontSize: '16px', lineHeight: '24px',}}>then 299.99 UAH per 14 days</LeveledSpan>
            </div>
            <Button style={{color: 'white', backgroundColor: 'black'}}><img src={applePayLogo}/></Button>
            <CardForm />
        </div>
        <LegalInfo />
    </div>
}

export default PaymentArea