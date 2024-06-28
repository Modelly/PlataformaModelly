import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { truncateDescription } from '../../../util/TruncateDescription.jsx';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, image, name, description, price, basePath }) => {
    const MAX_LENGTH = 20;

    return (
        <div className={styles.product_card}>
            <Link to={`${basePath}/produto/${id}`}>
                <img src={image} alt={name} className={styles.product_image} />
                <p className={styles.product_name}>{name}</p>
                <p className={styles.product_description}>{truncateDescription(description, MAX_LENGTH)}</p>
                <div className={styles.product_footer}>
                    <p className={styles.product_price}>R$ {price.toFixed(2)}</p>
                    <button className={styles.view_more_button}>Ver mais</button>
                </div>
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    basePath: PropTypes.string.isRequired,
};

export default ProductCard;
