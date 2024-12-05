import useWindowDimensions from '../../hooks/useWindowDimensions';
import LanguagePicker from '../../utility-components/language-picker/LanguagePicker'
import LeveledSpan from '../../utility-components/leveled-span/LeveledSpan'
import './Header.css'
import arrowSvg from '../../assets/arrow.svg'

function Header() {
    const { width } = useWindowDimensions();
    return <div className='header'>
        {
            width < 1000
            ? <>
                <img src={arrowSvg}/>
                <LeveledSpan level='first'>Checkout</LeveledSpan>
            </>
            : <></>
        }
        <LanguagePicker />
    </div>
}

export default Header