import React from 'react';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

const DownloadSection = () => {
  const handleDownload = (platform) => {
    if (platform === 'windows') {
      window.location.href = 'https://github.com/ayaycabron-dev/avlis-pdv/releases/download/v1.0.0/Avlis.-.PDV.Setup.0.1.0.exe';
    } else if (platform === 'mac') {
      window.location.href = 'https://github.com/ayaycabron-dev/avlis-pdv/releases/download/v1.0.0/avlis-macos.dmg'; // Substitua pelo link real
    } else if (platform === 'linux') {
      window.location.href = 'https://github.com/ayaycabron-dev/avlis-pdv/releases/download/v1.0.0/avlis-linux.AppImage'; // Substitua pelo link real
    }
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

export default DownloadSection;
