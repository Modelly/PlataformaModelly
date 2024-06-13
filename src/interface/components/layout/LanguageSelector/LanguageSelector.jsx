import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={styles.language_selector}>
            <button className={styles.language_button} onClick={() => changeLanguage('pt')}>Português</button>
            <button className={styles.language_button} onClick={() => changeLanguage('en')}>English</button>
        </div>
    );
};

export default LanguageSelector;
