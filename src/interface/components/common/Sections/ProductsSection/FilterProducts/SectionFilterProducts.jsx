import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types';
import ProductCard from '../../../Products/CardVertical/ProductCardVertical.jsx';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getBasePath } from "../../../../util/GetBasePath.jsx";

import styleSecProducts from '../../../Products/sectionProducts/VerticalSection/SectionProductsVertical.module.css';

const SectionProducts = ({ startIndex, limit, category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const basePath = getBasePath(location.pathname);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/produtos`, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });
                const productsData = Array.isArray(response.data) ? response.data : [];
                const filteredProducts = productsData.filter(product => product.categoria_produto === category.toLowerCase());
                console.log(category)
                setTimeout(() => {
                    setProducts(filteredProducts.slice(startIndex, startIndex + limit));
                    setLoading(false);
                }, 350)
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                const localResponse = await fetch('/data/products.json');
                if (localResponse.ok) {
                    const localData = await localResponse.json();
                    const productsData = Array.isArray(localData) ? localData : [];
                    const filteredProducts = productsData.filter(product => product.categoria_produto === category.toLowerCase());
                    setTimeout(() => {
                        setProducts(filteredProducts.slice(startIndex, startIndex + limit));
                        setLoading(false);
                    }, 350);
                } else {
                    console.error('Erro ao buscar produtos localmente:', error);
                    setLoading(false);
                }
            }
        };
    
        fetchProducts();
    
    }, [startIndex, limit, category]);

    return (
        <div className={styleSecProducts.products_container}>
            {loading ? (
                Array(8).fill().map((_, index) => (
                    <div key={index} >
                            <div >
                                <Skeleton height={200} />
                            </div>
                            <Skeleton count={2} style={{ marginTop: 10 }} />
                            <Skeleton width={250} style={{ marginTop: 10 }} />
                        </div>
                ))
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={product.pk_id_produto}
                        id={product.pk_id_produto}
                        image={product.foto_produto}
                        name={product.nome_produto}
                        description={product.descricao_produto}
                        price={product.preco_produto}
                        basePath={basePath}
                    />
                ))
            )}
        </div>
    );
};

SectionProducts.propTypes = {
    startIndex: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
};

export default SectionProducts;
