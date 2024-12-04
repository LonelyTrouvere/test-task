import './OrderArea.css'
import LeveledSpan from "../../utility-components/leveled-span/LeveledSpan"
import Divider from '../../utility-components/divider/Divider'

function OrderArea() {
    return <div className="order-card">
        <LeveledSpan level="first">{'Order info <= 100 char.'}</LeveledSpan>
        <div className="order-card__inner-wrapper">
            <LeveledSpan level='second'>{'Description <= 400 char.'}</LeveledSpan>
            <Divider />
            <div>
                <LeveledSpan level='second' style={{lineHeight: '20px'}}>Lamel Professional Smart Skin Compact Powder</LeveledSpan>
                <br />
                <LeveledSpan level='third'>Пудра для лица</LeveledSpan>
            </div>
            <Divider />
            <LeveledSpan level="first" style={{textAlign: 'right'}}>Total 299.99 UAH</LeveledSpan>
        </div>
    </div>
}

export default OrderArea