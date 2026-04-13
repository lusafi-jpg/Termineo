import React from 'react';
import './Navbar.css';

const Navbar = ({ onAdminClick }) => {
  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <div className="logo text-glow">Termineo</div>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#technology">Technologie</a></li>
          <li className="nav-item"><a href="#chenille-rover">Chenille rover</a></li>
          <li className="nav-item"><a href="#ia">IA & Données</a></li>
        </ul>
        <button className="cta-button secondary admin-btn" onClick={onAdminClick}>Admin</button>
      </div>
    </nav>
  );
};

export default Navbar;
