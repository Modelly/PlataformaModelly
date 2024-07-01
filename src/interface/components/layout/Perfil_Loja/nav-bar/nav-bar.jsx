import React, { useState, useEffect, useRef } from 'react';
import styles from './nav-bar.module.css';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('Recomendação');
    const [underlineStyle, setUnderlineStyle] = useState({});
    const navRef = useRef(null);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        const navItems = Array.from(navRef.current.children);
        const activeItem = navItems.find(item => item.textContent === activeTab);
        if (activeItem) {
            setUnderlineStyle({
                width: activeItem.offsetWidth,
                left: activeItem.offsetLeft
            });
        }
    }, [activeTab]);

    return (
        <div className={styles.navContainer}>
            <ul className={styles.navTabs} ref={navRef}>
                {['Recomendação', 'Mais buscados', 'Mais recentes', 'Em alta'].map((tab) => (
                    <li
                        key={tab}
                        className={`${styles.navItem} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            <div 
                className={styles.underline} 
                style={underlineStyle}
            ></div>
        </div>
    );
};

export default NavBar;
