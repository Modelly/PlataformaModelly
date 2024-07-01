import PropTypes from 'prop-types';
import CardLoja from "../../Cards/Lojas/LojaCard"

import styleSectionLoja from './SectionLoja.module.css'

const SectionLoja = ({ DataBase }) => {
    return (
        <div className={styleSectionLoja.Container}>
            {
                DataBase.map((loja, index) => (
                    <CardLoja key={index} DataBase={loja}/>
                ))
            }
        </div>
    )
}

SectionLoja.propTypes = {
    DataBase: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        basePath: PropTypes.string.isRequired,
        delay: PropTypes.string.isRequired,
    })).isRequired,
}

export default SectionLoja;