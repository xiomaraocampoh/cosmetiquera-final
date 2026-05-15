import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo-cosmetiquera.jpg';

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo-container">
                <Link to="/" aria-label="Volver al inicio">
                    <img 
                        src={logo} 
                        alt="Logotipo oficial de Cosmetiquera Tienda de Belleza" 
                        className="main-logo"
                    />
                </Link>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/catalogo">Catálogo</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;