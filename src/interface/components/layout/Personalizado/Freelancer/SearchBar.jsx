import React, { useState } from 'react';
import style from './SearchBar.module.css';
import Lupa from '../../../../../assets/images/imgs-personalizado/lupa.png'

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [customCategories, setCustomCategories] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    const handleAddCategory = () => {
        if (input.trim() !== '') {
            // Gera uma cor aleatória em formato hexadecimal
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            setCustomCategories([...customCategories, { name: input, color: randomColor }]);
            setInput('');
        }
    };

    return (
        <div className={style.searchBarContainer}>
            
            <div className={style.searchBar}>
                <div className={style.tabButtons}>
                    <button className={`${style.tab} ${style.freelancer}`}>Freelancers</button>
                    <button className={`${style.tab} ${style.clientes}`}>Clientes</button>
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Buscar categoria"
                    className={style.searchInput}
                />
                <button className={style.searchButton} onClick={handleAddCategory}>
                    <img  src={Lupa}/>
                </button>
            </div>
            <div className={style.categories}>
                {customCategories.map(category => (
                    <div
                        key={category.name}
                        className={style.category}
                        style={{ backgroundColor: category.color }}
                    >
                        #{category.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
