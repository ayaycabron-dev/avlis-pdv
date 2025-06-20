import React from 'react';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

const DownloadSection = () => {
  const handleDownload = (platform) => {
    // ESTA É A LINHA QUE PRECISA SER ATIVADA/VERIFICADA
    // Ela direciona o navegador para a rota de download no seu backend Flask
    window.location.href = `http://127.0.0.1:5000/api/download?platform=${platform}`;

    // A linha abaixo é a que exibe a mensagem que você está vendo.
    // Ela deve ser REMOVIDA ou COMENTADA depois que a linha acima for ativada.
    // alert(`Iniciando download para ${platform}. (Funcionalidade de download será implementada no backend)`);

    // Em um ambiente real, o backend Flask responderia com o arquivo
  };

  return (
    <section id="download" className="container" style={downloadSectionStyle}>
      <h2>Baixe o AVLIS PDV</h2>
      <p>Comece a otimizar sua gestão hoje mesmo. Download rápido e seguro.</p>
      <div style={downloadOptionsStyle}>
        <div style={downloadCardStyle} onClick={() => handleDownload('windows')}>
          <FaWindows size={50} color="var(--primary-color)" />
          <h3>Windows</h3>
          <p>Compatível com Windows 10/11</p>
          <button className="btn btn-primary">Download</button>
        </div>
        <div style={downloadCardStyle} onClick={() => handleDownload('mac')}>
          <FaApple size={50} color="var(--primary-color)" />
          <h3>macOS</h3>
          <p>Compatível com macOS Big Sur ou superior</p>
          <button className="btn btn-primary">Download</button>
        </div>
        <div style={downloadCardStyle} onClick={() => handleDownload('linux')}>
          <FaLinux size={50} color="var(--primary-color)" />
          <h3>Linux</h3>
          <p>Disponível para distribuições Debian/Ubuntu</p>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
      <p style={{ marginTop: '30px', fontSize: '0.9em', color: 'var(--secondary-color)' }}>
        Versão de avaliação gratuita. Requisitos mínimos do sistema: 4GB RAM, 2GHz Processador.
      </p>
    </section>
  );
};

// Styles for Download Section
const downloadSectionStyle = {
  backgroundColor: 'var(--background-light)',
};

const downloadOptionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  marginTop: '40px',
};

const downloadCardStyle = {
  backgroundColor: 'var(--text-light)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
  width: '280px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

downloadCardStyle[':hover'] = {
  transform: 'translateY(-5px)',
  boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
};

export default DownloadSection;