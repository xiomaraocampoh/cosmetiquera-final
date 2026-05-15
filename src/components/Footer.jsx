import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <section className="footer-info">
                <h2>Cosmetiquera Tienda de Belleza</h2>
                <p>Encuentra los mejores productos para tu cuidado personal con asesoría profesional.</p>
            </section>
            
            <section className="footer-contact">
                <h2>Contacto Directo</h2>
                <p>WhatsApp: +57 311 738 1697</p>
                <p>Ubicación: Armenia, Quindío</p>
            </section>
            
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Cosmetiquera. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;