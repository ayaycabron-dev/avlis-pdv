import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div style={textStyle}>
          <p>&copy; {new Date().getFullYear()} AVLIS PDV. Todos os direitos reservados.</p>
          <p>Feito com <span role="img" aria-label="coração">❤️</span> e tecnologia.</p>
        </div>
        <div style={socialIconsStyle}>
          <a href="https://github.com/ayaycabron" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/viniciuseduardolima" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}><FaLinkedin size={24} /></a>
          <a href="mailto:vinicius.cloudfy@gmail.com" style={iconLinkStyle}><FaEnvelope size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

// Styles for Footer
const footerStyle = {
  backgroundColor: 'var(--secondary-color)',
  color: 'var(--text-light)',
  padding: '40px 0',
  textAlign: 'center',
  marginTop: '50px',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle = {
  marginBottom: '20px',
};

const socialIconsStyle = {
  display: 'flex',
  gap: '20px',
};

const iconLinkStyle = {
  color: 'var(--text-light)',
  transition: 'color 0.3s ease',
};

iconLinkStyle[':hover'] = {
  color: 'var(--primary-color)',
};


export default Footer;