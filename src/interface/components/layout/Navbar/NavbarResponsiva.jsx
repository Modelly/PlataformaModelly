import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/imgs-nav/modelly-logo.png';
import './NavbarResponsiva.css';

const NavbarResponsiva = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Modelly Logo" className="logo_nav" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/personalizado">Personalizado</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/feira-virtual">Feira Virtual</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/seja-vendedor">Seja Vendedor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planos-modelly">Planos Modelly</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sobre">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/fale-conosco">Fale Conosco</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarResponsiva;
