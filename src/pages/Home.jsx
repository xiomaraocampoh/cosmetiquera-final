import { Link } from 'react-router-dom';
import '../index.css';

export default function Home() {
  return (
    <main className="page-container">
      <section className="hero">
        <h1>Bienvenida a Cosmetiquera</h1>
        <p>Descubre nuestra colección de productos de belleza premium</p>
        <Link to="/catalogo" className="btn btn-primary">
          Ver Catálogo
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Productos Premium</h2>
          <p>Selección cuidada de marcas reconocidas internacionalmente</p>
        </div>
        <div className="feature-card">
          <h2>Asesoría Personalizada</h2>
          <p>Nuestros expertos te ayudarán a encontrar lo perfecto para ti</p>
        </div>
        <div className="feature-card">
          <h2>Entrega Rápida</h2>
          <p>Recibe tus productos en la comodidad de tu hogar</p>
        </div>
      </section>

      <section className="cta">
        <h2>¿Necesitas ayuda?</h2>
        <p>Contacta con nuestros asesores de belleza</p>
        <Link to="/contacto" className="btn btn-secondary">
          Solicitar Asesoría
        </Link>
      </section>
    </main>
  );
}
