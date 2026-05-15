import { useState, useEffect } from 'react';
import { getProducts } from '../services/mockApi';
import '../index.css';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error al cargar productos');
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="page-container">
        <h1>Catálogo de Productos</h1>
        <div className="loading">Cargando productos...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-container">
        <h1>Catálogo de Productos</h1>
        <div className="error">
          <p>⚠️ {error}</p>
          <p>Por favor, intenta más tarde.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container">
      <h1>Catálogo de Productos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="brand">{product.brand}</p>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">${product.price.toLocaleString('es-CO')}</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </main>
  );
}
