import Button from '../../utility-components/button/Button'
import LeveledSpan from '../../utility-components/leveled-span/LeveledSpan'
import CardForm from '../card-form/CardForm'
import LegalInfo from '../legal-info/LegalInfo'
import './PaymentArea.css'
import applePayLogo from '../../assets/apple-pay.svg'
import arrowSvg from '../../assets/arrow.svg'
import Divider from '../../utility-components/divider/Divider'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function PaymentArea() {
    const { width } = useWindowDimensions()

    return <div className="payment-area">
        <div className="payment-area__payment">
            {
                width >= 1000
                ? <div className='payment-area__checkout'>
                    <img className='payment-area__arrow' src={arrowSvg}/>
                    <LeveledSpan level='first'>Checkout</LeveledSpan>
                </div>
                : <></>
            }
            <div className="payment-area__order">
                <LeveledSpan level='first' style={{fontSize: '32px', lineHeight: '40px', display: 'block'}}>5 days free</LeveledSpan>
                <LeveledSpan level='second' style={{fontSize: '16px', lineHeight: '24px',}}>then 299.99 UAH per 14 days</LeveledSpan>
            </div>
            <Button style={{color: 'white', backgroundColor: 'black'}} type='button'><img src={applePayLogo}/></Button>
            <div className='payment-area__card'>
                <div className='payment-area__divider-wrapper'>
                    <Divider style={{width: '33%'}}/> 
                        <LeveledSpan level='third' style={{lineHeight: '24px', fontSize: '14px'}}>or pay with card</LeveledSpan> 
                    <Divider style={{width: '33%'}}/>
                </div>
                <CardForm />
            </div>
        </div>
        <LegalInfo />
    </div>
}

export default PaymentArea