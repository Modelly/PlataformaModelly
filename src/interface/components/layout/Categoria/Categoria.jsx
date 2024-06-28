// Categoria.jsx
import PropTypes from 'prop-types';
import SectionProducts from '../../common/Products/sectionProducts/SectionProducts';
import HorizontalCategory from '../../common/Categories/horizontalRectangleCategory/HorizontalCategory';

import imgPaperCategory from '../../../../assets/images/img-categoria/PaperCategory.png'
import imgFeltroCategory from '../../../../assets/images/img-categoria/FeltroCategory.png'

import stylesCategoria from './Categoria.module.css';

const Categoria = ({ titulo="Categoria", descricao="Descrição da categoria fica bem aqui" }) => {
    const dbCategorias = [
        {
            categoria: 'Artes de papel',
            imagem: imgPaperCategory
        },
        {
            categoria: 'Artes de feltro',
            imagem: imgFeltroCategory
        }
    ];

    return (
        <main>
            <div className={stylesCategoria.backgroundCategory}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
            
            <section className={stylesCategoria.products_container}>
                <SectionProducts />
            </section>
            
            <section className={stylesCategoria.ContainerCategories}>
                <h2>Venha descobrir mais!</h2>
                <div className={stylesCategoria.Categories}>
                    {dbCategorias.map((categoria, index) => (
                        <HorizontalCategory 
                            key={index}
                            category={categoria.categoria}
                            image={categoria.imagem}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

Categoria.propTypes = {
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
}

export default Categoria;
