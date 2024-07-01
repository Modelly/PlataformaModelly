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
        image1: PropTypes.string.isRequired,
        image2: PropTypes.string.isRequired,
        image3: PropTypes.string.isRequired,
        image4: PropTypes.string.isRequired,
        PerfilImg: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
}

export default SectionLoja;