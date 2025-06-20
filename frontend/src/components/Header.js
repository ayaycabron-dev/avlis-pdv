import React from 'react';
// Removendo FaLaptopCode, pois agora usaremos a imagem
// import { FaLaptopCode, FaDownload } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa'; // Apenas o ícone de download permanece

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={containerStyle}>
        <div style={logoStyle}>
          {/* Adicionando a tag <img> com o caminho para o seu logo */}
          <img src="/avlis-logo.png" alt="AVLIS PDV Logo" style={imageLogoStyle} />
          {/* Você pode manter o texto se quiser, mas o logo já é a marca */}
          {/* <span>AVLIS PDV</span> */}
        </div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <a href="#features" onClick={() => scrollToSection('features')} style={linkStyle}>Recursos</a>
            </li>
            <li style={liStyle}>
              <a href="#how-it-works" onClick={() => scrollToSection('how-it-works')} style={linkStyle}>Como Funciona</a>
            </li>
            <li style={liStyle}>
              <a href="#support" onClick={() => scrollToSection('support')} style={linkStyle}>Suporte</a>
            </li>
            <li style={liStyle}>
              <a href="#contact" onClick={() => scrollToSection('contact')} style={linkStyle}>Contato</a>
            </li>
            <li style={liStyle}>
              <a href="#download" onClick={() => scrollToSection('download')} className="btn btn-primary" style={downloadBtnStyle}>
                <FaDownload style={{ marginRight: '8px' }} /> Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Styles for Header (inline for simplicity, can be moved to CSS module)
const headerStyle = {
  backgroundColor: 'var(--text-light)',
  color: 'var(--text-dark)',
  padding: '15px 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  // Ajuste o font-size se quiser que o texto (se mantiver) ou o alinhamento fiquem diferentes
  fontSize: '1.8rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
};

const imageLogoStyle = {
    height: '70px', // Ajuste a altura conforme necessário para o seu logo
    width: 'auto',   // Mantém a proporção
    marginRight: '10px', // Espaçamento se você mantiver o texto "AVLIS PDV" ao lado
};


const navStyle = {
  display: 'flex',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
};

const liStyle = {
  marginLeft: '25px',
};

const linkStyle = {
  color: 'var(--text-dark)',
  fontSize: '1rem',
  fontWeight: '600',
  transition: 'color 0.2s ease',
};

const downloadBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 15px',
    fontSize: '0.9rem',
    marginLeft: '20px',
};


export default Header;