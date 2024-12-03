import './OrderCard.css'
import LeveledSpan from "../../utility-components/leveled-span/LeveledSpan"
import Divider from '../../utility-components/divider/Divider'

function OrderCard() {
    return <div className="order-card">
        <LeveledSpan level="first">{'Order info <= 100 char.'}</LeveledSpan>
        <LeveledSpan level='second'>{'Description <= 400 char.'}</LeveledSpan>
        <Divider />
        <div>
            <LeveledSpan level='second'>Lamel Professional Smart Skin Compact Powder</LeveledSpan>
            <br />
            <LeveledSpan level='third'>Пудра для лица</LeveledSpan>
        </div>
        <Divider />
        <LeveledSpan level="third">Total 299.99 UAH</LeveledSpan>
    </div>
}

export default OrderCard