import { useParams } from 'react-router-dom';

import SectionProducts from '../../common/Products/sectionProducts/VerticalSection/SectionProductsVertical';
import HorizontalCategory from '../../common/Categories/horizontalRectangleCategory/HorizontalCategory';

import imgPaperCategory from '../../../../assets/images/img-categoria/PaperCategory.png';
import imgFeltroCategory from '../../../../assets/images/img-categoria/FeltroCategory.png';

import stylesCategoria from './Categoria.module.css';

const Categoria = () => {
    const {categoria} = useParams();
    const dbCategorias = [
        {
            categoria: 'Artes de papel',
            imagem: imgPaperCategory,
            animationDelay: "0"
        },
        {
            categoria: 'Artes de feltro',
            imagem: imgFeltroCategory,
            animationDelay: "150"
        }
    ];

    return (
        <main>
            <div className={stylesCategoria.backgroundCategory}>
                <h1>{categoria}</h1>
            </div>
            
            <section className={stylesCategoria.products_container}>
                <SectionProducts startIndex={0} limit={8}/>
            </section>
            
            <section className={stylesCategoria.ContainerCategories}>
                <h2>Venha descobrir mais!</h2>
                <div className={stylesCategoria.Categories}>
                    {dbCategorias.map((categoria, index) => (
                        <HorizontalCategory 
                            key={index}
                            category={categoria.categoria}
                            image={categoria.imagem}
                            delay={categoria.animationDelay}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Categoria;
