import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styleCardHorizontal from './CardHorizontal.module.css';

const CardHorizontal = ({id, image, price, basePath}) => {
    return (
        <Link to={`${basePath}/produto/${id}`} className={styleCardHorizontal.ContainerCard} style={{ backgroundImage: `url(${image}`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
            <span className={styleCardHorizontal.CardPrice}>R$ {price}</span>
        </Link>
    )
}

CardHorizontal.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    basePath: PropTypes.string.isRequired
};

export default CardHorizontal;