import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styleRoundedCategoty from './RoundedCategory.module.css'

const RoundedCategory = ({imagem, basePath, categoria}) => {
    return (
        <Link to={`${basePath}/categoria/${categoria}`} className={styleRoundedCategoty.Container}>
            <img src={imagem} alt="Imagem da categoria" className={styleRoundedCategoty.ImageCategory}/>
            <p className={styleRoundedCategoty.CategoryText}>{categoria}</p>
        </Link>
    )
};

RoundedCategory.propTypes = {
    imagem: PropTypes.string.isRequired,
    basePath: PropTypes.string.isRequired,
    categoria:  PropTypes.string.isRequired
};

export default RoundedCategory;