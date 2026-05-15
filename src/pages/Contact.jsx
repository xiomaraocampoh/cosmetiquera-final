import { useState } from 'react';
import { submitLead } from '../services/mockApi';
import '../index.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    interest: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await submitLead(formData);
      setMessage(`✅ ${response.message} Tu ID de solicitud: ${response.leadId}`);
      setFormData({ fullName: '', phone: '', interest: '' });
    } catch (err) {
      setError(`❌ ${err.message || 'Error al enviar la solicitud'}`);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'Cuidado Facial',
    'Cuidado Corporal',
    'Maquillaje',
    'Cabello',
    'Fragancias',
  ];

  return (
    <main className="page-container">
      <h1>Contacto y Asesoría</h1>
      <div className="contact-wrapper">
        <section className="contact-info">
          <h2>¿Necesitas ayuda?</h2>
          <p>
            Nuestro equipo de asesores de belleza está disponible para ayudarte
            a encontrar los productos perfectos para tus necesidades.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">Nombre Completo *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Tu número de teléfono"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="interest">Categoría de Interés *</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Enviando...' : 'Solicitar Asesoría'}
          </button>
        </form>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
      </div>
    </main>
  );
}
