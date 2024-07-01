import { useEffect } from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../StarRating/StarRating.jsx';
import HeartToggle from '../../Toggle/HeartToggle/HeartToggle.jsx';

import styleCardLoja from './LojaCard.module.css';

const CardLoja = ({DataBase}) => {

    return (
        <div className={styleCardLoja.Container}>
            <div className={styleCardLoja.BoxImages}>
                <img src={DataBase.image1} alt="imagem do produto" className={styleCardLoja.Image} />
                <img src={DataBase.image2} alt="imagem do produto" className={styleCardLoja.Image} />
                <img src={DataBase.image3} alt="imagem do produto" className={styleCardLoja.Image} />
                <img src={DataBase.image4} alt="imagem do produto" className={styleCardLoja.Image} />
            </div>
            <div className={styleCardLoja.BoxContent}>
                <div className={styleCardLoja.Content}>
                    <img src={DataBase.PerfilImg} alt="Imagem de perfil" className={styleCardLoja.FotoPerfil}/>
                    <div className={styleCardLoja.BoxInfos}>
                        <span>{DataBase.name}</span>
                        <div >
                            <StarRating />
                        </div>
                    </div>
                </div>
                <div className={styleCardLoja.BoxHeart}>
                    <HeartToggle className={styleCardLoja.Heart}/>
                </div>
            </div>
        </div>
    )
};

CardLoja.propTypes = {
    DataBase: PropTypes.shape({
        image1: PropTypes.string.isRequired,
        image2: PropTypes.string.isRequired,
        image3: PropTypes.string.isRequired,
        image4: PropTypes.string.isRequired,
        PerfilImg: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        delay: PropTypes.string.isRequired,
    }).isRequired
}

export default CardLoja;