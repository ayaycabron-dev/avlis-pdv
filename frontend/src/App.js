import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import DownloadSection from './components/DownloadSection';

// Importe mais ícones conforme necessário para as suas seções de recursos
import { FaCogs, FaChartLine, FaCashRegister, FaSyncAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Hero Section */}
      <section id="hero" style={heroSectionStyle}>
        <div className="container">
          <h1>AVLIS PDV: A Solução Completa para sua Gestão de Vendas</h1>
          <p style={heroSubtitleStyle}>Otimize seu negócio com um sistema de ponto de venda intuitivo, rápido e eficiente.</p>
          <div style={heroButtonsStyle}>
            <a href="#download" className="btn btn-primary">Download Grátis</a>
            <a href="#contact" className="btn btn-secondary">Solicitar Demonstração</a>
          </div>

          {/* Adicionando o vídeo local aqui */}
          <div style={videoWrapperStyle}>
            <video
              src="/videos/avlis_demo.mp4" // Substitua pelo caminho do seu vídeo local
              title="Demonstração do AVLIS PDV"
              controls // Mostra os controles do vídeo (play/pause, volume, etc.)
              autoPlay // Inicia o vídeo automaticamente (pode ser bloqueado por navegadores)
              loop // Repete o vídeo quando termina
              muted // Silencia o vídeo (muitas vezes necessário para autoPlay)
              style={videoPlayerStyle}
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container">
        <h2>Recursos Principais</h2>
        <p>Descubra como o AVLIS PDV pode transformar sua loja.</p>
        <div style={featuresGridStyle}>
          <div style={featureCardStyle}>
            <FaCashRegister size={40} color="var(--primary-color)" />
            <h3>PDV Rápido e Intuitivo</h3>
            <p>Vendas ágeis e eficientes, com interface otimizada para o dia a dia do seu negócio.</p>
          </div>
          <div style={featureCardStyle}>
            <FaSyncAlt size={40} color="var(--primary-color)" />
            <h3>Controle de Estoque Inteligente</h3>
            <p>Gerencie seu inventário em tempo real, receba alertas de baixa e evite perdas.</p>
          </div>
          <div style={featureCardStyle}>
            <FaChartLine size={40} color="var(--primary-color)" />
            <h3>Relatórios Gerenciais Completos</h3>
            <p>Tenha acesso a dados e insights para tomar decisões estratégicas e aumentar seus lucros.</p>
          </div>
          <div style={featureCardStyle}>
            <FaCogs size={40} color="var(--primary-color)" />
            <h3>Emissão de Documentos Fiscais</h3>
            <p>Simplifique a emissão de notas e cupons fiscais, tudo conforme a legislação.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container">
        <h2>Como Funciona?</h2>
        <p>Começar a usar o AVLIS PDV é simples:</p>
        <div style={howItWorksStepsStyle}>
          <div style={stepCardStyle}>
            <span style={stepNumberStyle}>1</span>
            <h3>Baixe e Instale</h3>
            <p>Faça o download do programa e siga o processo de instalação em poucos cliques.</p>
          </div>
          <div style={stepCardStyle}>
            <span style={stepNumberStyle}>2</span>
            <h3>Cadastre Produtos</h3>
            <p>Insira seus produtos e comece a controlar seu estoque de forma eficiente.</p>
          </div>
          <div style={stepCardStyle}>
            <span style={stepNumberStyle}>3</span>
            <h3>Comece a Vender</h3>
            <p>Utilize a interface intuitiva do PDV para registrar suas vendas rapidamente.</p>
          </div>
          <div style={stepCardStyle}>
            <span style={stepNumberStyle}>4</span>
            <h3>Acompanhe Resultados</h3>
            <p>Acesse relatórios detalhados para ter uma visão clara do desempenho do seu negócio.</p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="container">
        <h2>Suporte e Guia de Uso</h2>
        <p>Conte com nossa equipe para tirar suas dúvidas e aproveitar ao máximo o AVLIS PDV.</p>
        <div style={supportOptionsStyle}>
          <div style={supportCardStyle}>
            <h3>Base de Conhecimento</h3>
            <p>Encontre artigos, tutoriais e respostas para as perguntas mais frequentes.</p>
            <a href="/guia-de-uso" className="btn btn-secondary">Acessar Guia de Uso</a>
          </div>
          <div style={supportCardStyle}>
            <h3>Suporte Dedicado</h3>
            <p>Nossa equipe está pronta para ajudar via chat, e-mail ou telefone.</p>
            <a href="#contact" className="btn btn-primary">Fale com o Suporte</a>
          </div>
        </div>
      </section>

      <ContactForm />
      <DownloadSection />

      <Footer />
    </div>
  );
}

// Styles for App.js sections
const heroSectionStyle = {
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-light)',
  padding: '80px 20px',
  textAlign: 'center',
};

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '40px',
  maxWidth: '800px',
  margin: '0 auto 40px auto',
};

const heroButtonsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
  marginBottom: '60px', // Adicionado margem para separar os botões do vídeo
};

// NOVOS ESTILOS PARA O VÍDEO (mantidos os mesmos que eram para o iframe para responsividade)
const videoWrapperStyle = {
    position: 'relative',
    paddingBottom: '56.25%', /* 16:9 Aspect Ratio (9 / 16 * 100) */
    height: 0,
    overflow: 'hidden',
    maxWidth: '900px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    backgroundColor: '#000', // Fundo preto para o player
};

const videoPlayerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0, // 'border' para o iframe, mas para o video é apenas um estilo visual
};


const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '30px',
  marginTop: '40px',
};

const featureCardStyle = {
  backgroundColor: 'var(--text-light)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  textAlign: 'center',
};

const howItWorksStepsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  marginTop: '40px',
};

const stepCardStyle = {
  backgroundColor: 'var(--text-light)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  textAlign: 'center',
  position: 'relative',
  paddingTop: '60px',
};

const stepNumberStyle = {
  position: 'absolute',
  top: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-light)',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.8rem',
  fontWeight: '700',
  border: '3px solid var(--text-light)',
};

const supportOptionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  marginTop: '40px',
};

const supportCardStyle = {
  backgroundColor: 'var(--text-light)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  textAlign: 'center',
  width: '350px',
};


export default App;
