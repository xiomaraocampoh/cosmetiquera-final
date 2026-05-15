import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/mockApi';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchProducts();
                setProducts(data);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) {
        return (
            <main className="status-container">
                <p role="status">Cargando catálogo de belleza...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="status-container">
                <section className="error-message">
                    <h2>Hubo un inconveniente</h2>
                    <p>{error.message}</p>
                    <button onClick={() => window.location.reload()} className="btn-retry">
                        Intentar cargar de nuevo
                    </button>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="catalog-header">
                <h1>Nuestro Catálogo</h1>
                <p>Explora productos seleccionados para tu cuidado personal.</p>
            </section>

            {products.length === 0 ? (
                <section className="empty-state">
                    <p>No hay productos disponibles en este momento. Vuelve pronto.</p>
                </section>
            ) : (
                <section className="products-grid">
                    {products.map((product) => (
                        <article key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="brand">{product.brand}</p>
                                <p className="price">${product.price.toLocaleString('es-CO')}</p>
                                <a href="/contacto" className="btn-action">
                                    Solicitar asesoría
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
};

export default Catalog;