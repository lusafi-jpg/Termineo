import React from 'react';
import './Navbar.css';

const Navbar = ({ onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo text-glow">Termineo</div>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item"><a href="#technology" onClick={() => setIsMenuOpen(false)}>Technologie</a></li>
          <li className="nav-item"><a href="#chenille-rover" onClick={() => setIsMenuOpen(false)}>Chenille rover</a></li>
          <li className="nav-item"><a href="#ia" onClick={() => setIsMenuOpen(false)}>IA & Données</a></li>
          <li className="nav-item mobile-only">
            <button className="cta-button secondary" onClick={() => { onAdminClick(); setIsMenuOpen(false); }}>Admin</button>
          </li>
        </ul>

        <button className="cta-button secondary admin-btn desktop-only" onClick={onAdminClick}>Admin</button>
      </div>
    </nav>
  );
};

export default Navbar;
