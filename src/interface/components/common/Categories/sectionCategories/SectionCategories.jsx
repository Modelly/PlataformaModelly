import PropTypes from 'prop-types';
import styleCategorySection from './SectionCategories.module.css'

const SectionCategories = ({DataBase, CategoryComponent}) => {
    return (
        <div className={styleCategorySection.roundedCategorySection}>
            {
            DataBase.map(categoria => (
                <CategoryComponent 
                key={categoria}
                category={categoria.category}
                image={categoria.image} 
                basePath={categoria.basePath} 
                delay={categoria.delay}
                />
            ))
        }
        </div>
    )
}

SectionCategories.propTypes = {
    CategoryComponent: PropTypes.elementType.isRequired,
    DataBase: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
    })).isRequired,
}

export default SectionCategories;