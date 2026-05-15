import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <section className="hero-section">
                <h1>Resalta tu belleza natural con Cosmetiquera</h1>
                <p>Descubre nuestra selección de maquillaje y cuidado facial con asesoría personalizada.</p>
                <Link to="/catalogo" className="btn-primary">Explorar catálogo</Link>
            </section>

            <section className="featured-categories">
                <h2>Categorías Destacadas</h2>
                <div className="categories-grid">
                    <article className="category-card">
                        <h3>Cuidado Facial</h3>
                        <p>Serums, protectores solares y rutinas de hidratación de alta calidad.</p>
                    </article>
                    <article className="category-card">
                        <h3>Maquillaje</h3>
                        <p>Bases, correctores y paletas con pigmentación profesional.</p>
                    </article>
                    <article className="category-card">
                        <h3>Accesorios</h3>
                        <p>Brochas y herramientas esenciales para tu rutina diaria.</p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Home;