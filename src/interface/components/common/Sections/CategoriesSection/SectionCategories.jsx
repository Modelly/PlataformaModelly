import PropTypes from 'prop-types';
import styleCategorySection from './SectionCategories.module.css'

const SectionCategories = ({DataBase, CategoryComponent}) => {
    return (
        <div className={styleCategorySection.roundedCategorySection}>
            {
            DataBase.map(categoria => (
                <CategoryComponent 
                key={categoria.delay}
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
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        basePath: PropTypes.string.isRequired,
        delay: PropTypes.string.isRequired,
    })).isRequired,
}

export default SectionCategories;