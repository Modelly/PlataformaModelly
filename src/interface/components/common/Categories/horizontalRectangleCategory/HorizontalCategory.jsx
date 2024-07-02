import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import styleCategoryH from './HorizontalCategory.module.css';

const HorizontalCategory = ({ category, image, delay, basePath }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const getLastWord = (str) => {
        const words = str.split(' ');
        return words[words.length - 1];
    };

    const lastWord = getLastWord(category);
  
    return (
        <Link to={`${basePath}/categoria/${lastWord}`} className={styleCategoryH.ContainerCategory} data-aos="fade-up" data-aos-delay={delay}>
            <img src={image} alt={category} className={styleCategoryH.ImageCategory} />
            <div className={styleCategoryH.BoxContent}>
                <h1>{category}</h1>
                <p>Conhecer agora -&gt;</p>
            </div>
        </Link>
    );
}

HorizontalCategory.propTypes = {
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired,
    basePath: PropTypes.string.isRequired
};

export default HorizontalCategory;