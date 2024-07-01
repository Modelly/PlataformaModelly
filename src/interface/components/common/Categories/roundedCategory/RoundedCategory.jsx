import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import styleRoundedCategoty from './RoundedCategory.module.css'

const RoundedCategory = ({category, image, basePath, delay}) => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duração das animações
        });
    }, []);

    return (
        <Link to={`${basePath}/categoria/${category}`} className={styleRoundedCategoty.Container} data-aos="fade-up" data-aos-delay={delay}>
            <img src={image} alt="Imagem da categoria" className={styleRoundedCategoty.ImageCategory}/>
            <p className={styleRoundedCategoty.CategoryText}>{category}</p>
        </Link>
    )
};

RoundedCategory.propTypes = {
    category:  PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    basePath: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired
};

export default RoundedCategory;