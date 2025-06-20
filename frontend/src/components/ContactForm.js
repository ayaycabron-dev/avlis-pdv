import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'loading'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Usando a variável de ambiente REACT_APP_API_URL
      const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000'; // URL local por padrão

      // Envia o formulário para o backend
      const response = await axios.post(`${apiUrl}/api/contact`, formData);

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container">
      <h2>Fale Conosco</h2>
      <p>Tem dúvidas ou quer uma demonstração? Envie uma mensagem!</p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        {status === 'success' && (
          <div className="alert alert-success">Mensagem enviada com sucesso!</div>
        )}
        {status === 'error' && (
          <div className="alert alert-error">Erro ao enviar mensagem. Tente novamente.</div>
        )}
      </form>
    </section>
  );
};

// Styles for Form
const formStyle = {
  maxWidth: '600px',
  margin: '30px auto',
  padding: '20px',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  backgroundColor: 'var(--text-light)',
};

export default ContactForm;
