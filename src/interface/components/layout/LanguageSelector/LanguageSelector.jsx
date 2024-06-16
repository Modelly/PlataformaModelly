import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

import ptFlag from "../../../../assets/images/imgs-flagLanguages/pt.png"
import enFlag from "../../../../assets/images/imgs-flagLanguages/en.png"

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setShowDropdown(false);
    };

    const currentLanguage = i18n.language;
    const languages = {
        en: {
            name: 'English',
            flag: enFlag
        },
        pt: {
            name: 'Português',
            flag: ptFlag
        },
    }

    return (
        <div className={styles.languageSelector}>
            <button onClick={() => setShowDropdown(!showDropdown)} className={styles.fixedButton}>
                <img src={languages[currentLanguage].flag} alt={`${languages[currentLanguage].name}language flag`} />
                {languages[currentLanguage].name}
            </button>

            {
                showDropdown && (
                    <div className={styles.dropdown}>
                        {Object.keys(languages).map((lang) => (
                            <button key={lang} onClick={() => changeLanguage(lang)} className={styles.dropdownButton}>
                            <img src={languages[lang].flag} alt={languages[lang].name} className={styles.flag} />
                            {languages[lang].name}
                            </button>
                        ))}
                    </div>
                )
            } 
        </div>
    );
};

export default LanguageSelector;
