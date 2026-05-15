import React, { useState } from 'react';
import { submitLead } from '../services/mockApi';

const Contact = () => {
    const [formData, setFormData] = useState({ fullName: '', phone: '', interest: '' });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            await submitLead(formData);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setErrorMessage(err.message || 'Ocurrió un inconveniente al registrar la solicitud.');
        }
    };

    if (status === 'success') {
        return (
            <main className="status-container">
                <section className="success-message">
                    <h2>Solicitud Registrada</h2>
                    <p>Tus datos de contacto han sido guardados. Un asesor se comunicará contigo vía WhatsApp en breve.</p>
                    <a href="/catalogo" className="btn-primary">Retornar al catálogo</a>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="contact-form-section">
                <h1>Asesoría Personalizada</h1>
                <p>Ingresa tus datos para recibir información sobre los productos de la tienda.</p>

                {status === 'error' && (
                    <div className="error-message" role="alert">
                        <p><strong>Atención:</strong> {errorMessage}</p>
                        <p>Revisa la información proporcionada e intenta nuevamente.</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Nombre completo</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Número de teléfono móvil</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="interest">Categoría o producto de interés principal</label>
                        <input
                            type="text"
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-action"
                    >
                        {status === 'loading' ? 'Procesando datos de contacto...' : 'Solicitar asesoría por WhatsApp'}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Contact;