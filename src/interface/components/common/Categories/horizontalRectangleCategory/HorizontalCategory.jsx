import PropTypes from 'prop-types';
import styleCategoryH from './HorizontalCategory.module.css' 

const HorizontalCategory = ({category, image}) => {
    return (
        <div className={styleCategoryH.ContainerCategory}>
            <img src={image} alt="" className={styleCategoryH.ImageCategory}/>
            <div className={styleCategoryH.BoxContent}>
                <h1>{category}</h1>
                <p>Conhecer agora -&gt;</p>
            </div>
        </div>
    )
}

HorizontalCategory.propTypes = {
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default HorizontalCategory;