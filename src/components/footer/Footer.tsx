import LeveledSpan from '../../utility-components/leveled-span/LeveledSpan'
import './Footer.css'

function Footer() {
    return <footer className="paymant-footer">
        <LeveledSpan level='second' style={{lineHeight: '20px', color: '#666C7B', textAlign: 'right'}}>Powered by <b>Solid</b></LeveledSpan>
    </footer>
}

export default Footer