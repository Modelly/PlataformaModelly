import ProdutoLayout from '../../components/layout/Produto/ProdutoLayout';
import Navbar from "../../components/layout/Navbar/Navbar.jsx"
import Footer from "../../components/layout/Footer/Footer.jsx"
import React from 'react';

function Produto() {
    return (
        <>
            <Navbar />
            <ProdutoLayout />
            <Footer />
        </>
    )
}

export default Produto;