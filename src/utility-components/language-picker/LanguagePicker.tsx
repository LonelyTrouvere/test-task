import { useState } from 'react'
import './LanguagePicker.css'
import { Languages, languages } from './type'
import LeveledSpan from '../leveled-span/LeveledSpan'

function LanguagePicker() {
    const [pickedLanguage, setPickedLanguage] = useState<Languages>('Укр')
    return <div className="language-picker">
        {
            languages.map(
                lang => 
                    <LeveledSpan
                        key={lang}
                        level='second'
                        className={`language ${pickedLanguage !== lang ? 'not-picked-language' : ''}`}
                        onClick={() => setPickedLanguage(lang)}
                        style={{
                            color: pickedLanguage === lang ? '#363A43' : '#B0B4BE'
                        }}
                     >
                        {lang}
                     </LeveledSpan>
            )
        }
    </div>
}

export default LanguagePicker