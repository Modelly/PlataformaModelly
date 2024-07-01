import { useState } from 'react';
import emptyHeartImg from '../../../../../assets/images/heart-img/!Favoritado.png';
import filledHeartImg from '../../../../../assets/images/heart-img/favoritado.png';
import styleCardLoja from './HeartToggle.module.css';

const HeartToggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styleCardLoja.BoxHeart} onClick={handleClick}>
      <img
        className={styleCardLoja.HeartImage}
        src={isClicked ? filledHeartImg : emptyHeartImg}
        alt={isClicked ? 'Coração preenchido' : 'Coração vazio'}
      />
    </div>
  );
};

export default HeartToggle;
