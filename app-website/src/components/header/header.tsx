// src/components/Header/Header.tsx
import './Header.css';
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">GRUPO VMPRO</h1>
      <nav className="nav">
        <a href="#">PÁGINA INICIAL</a>
        <a href="#">CADASTRAR</a>
        <a href="#">VALOR</a>
        <a href="#">LOGIN</a>
      </nav>
      
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="mailto:contato@vmpro.com">
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Header;
