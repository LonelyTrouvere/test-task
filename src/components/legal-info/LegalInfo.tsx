import LeveledSpan from '../../utility-components/leveled-span/LeveledSpan'
import './LegalInfo.css'

function LegalInfo() {
    return <div className="legal-info">
        <LeveledSpan level='third' style={{color: '#666C7B'}}>You'll have your <b>Plan Pro during 1 year.</b> After this period of time, your plan will be <b>automatically renewed</b> with its original price without any discounts applied.</LeveledSpan>
    </div>
}

export default LegalInfo