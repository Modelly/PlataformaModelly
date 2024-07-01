import { useParams, useLocation } from 'react-router-dom';
import { getBasePath } from '../../util/GetBasePath';

import SectionCategories from '../../common/Categories/sectionCategories/SectionCategories';
import HorizontalCategory from '../../common/Categories/horizontalRectangleCategory/HorizontalCategory';
import SectionProducts from '../../common/Products/sectionProducts/VerticalSection/SectionProductsVertical';

import imgPaperCategory from '../../../../assets/images/img-categoria/PaperCategory.png';
import imgFeltroCategory from '../../../../assets/images/img-categoria/FeltroCategory.png';

import stylesCategoria from './Categoria.module.css';

const Categoria = () => {
    const location = useLocation();
    const {categoria} = useParams();
    const basePath = getBasePath(location.pathname);
    const dbCategorias = [
        {
            category: 'Artes de papel',
            image: imgPaperCategory,
            basePath: basePath,
            delay: "0"
        },
        {
            category: 'Artes de feltro',
            image: imgFeltroCategory,
            basePath: basePath,
            delay: "150"
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
                <SectionCategories 
                    DataBase={dbCategorias}
                    CategoryComponent={HorizontalCategory}
                />
            </section>
        </main>
    );
}

export default Categoria;
