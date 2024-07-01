import axios from 'axios';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CardHorizontal from '../../cardHorizontal/CardHorizontal.jsx';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getBasePath } from "../../../../util/GetBasePath.jsx";

import styleSecProducts from './SectionProductsHorizontal.module.css';

const SectionProductsHorizontal = ({ startIndex, limit }) => {
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
                setTimeout(() => {
                    setProducts(productsData.slice(startIndex, startIndex + limit));
                    setLoading(false);
                }, 350)
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                const localResponse = await fetch('/data/products.json');
                if (localResponse.ok) {
                    const localData = await localResponse.json();
                    const productsData = Array.isArray(localData) ? localData : [];
                    setTimeout(() => {
                        setProducts(productsData.slice(startIndex, startIndex + limit));
                        setLoading(false);
                    }, 350);
                } else {
                    console.error('Erro ao buscar produtos localmente:', error);
                    setLoading(false);
                }
            }
        };
    
        fetchProducts();
    
    }, [startIndex, limit]);

    return (
        <div className={styleSecProducts.products_container}>
            {loading ? (
                Array(4).fill().map((_, index) => (
                    <div key={index} className={styleSecProducts.SkelletonContainer}>
                        <Skeleton height={150} width={270} style={{ marginRight: 10, marginTop: 60, marginBottom: 60}} />
                    </div>
                ))
            ) : (
                products.map((product) => (
                    <CardHorizontal
                        key={product.pk_id_produto}
                        id={product.pk_id_produto}
                        image={product.foto_produto}
                        price={product.preco_produto}
                        basePath={basePath}
                    />
                ))
            )}
        </div>
    );
};

SectionProductsHorizontal.propTypes = {
    startIndex: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired
};

export default SectionProductsHorizontal;
