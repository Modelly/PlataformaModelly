import { useEffect } from 'react';
import PropTypes from 'prop-types';

import AOS from 'aos';
import 'aos/dist/aos.css';

import styleCategoryH from './HorizontalCategory.module.css';

const HorizontalCategory = ({ category, image, delay }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duração das animações
        });
    }, []);
  
    return (
        <div className={styleCategoryH.ContainerCategory} data-aos="fade-up" data-aos-delay={delay}>
            <img src={image} alt={category} className={styleCategoryH.ImageCategory} />
            <div className={styleCategoryH.BoxContent}>
                <h1>{category}</h1>
                <p>Conhecer agora -&gt;</p>
            </div>
        </div>
    );
}

HorizontalCategory.propTypes = {
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired,
};

export default HorizontalCategory;