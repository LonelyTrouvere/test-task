import { useState } from 'react'
import './LanguagePicker.css'
import { Languages, languages } from './type'

function LanguagePicker() {
    const [pickedLanguage, setPickedLanguage] = useState<Languages>()

    return <div className="language-picker">
        {
            languages.map(lang => <span className={`language ${pickedLanguage === lang ? 'picked' : ''}`}>{lang}</span>)
        }
    </div>
}

export default LanguagePicker