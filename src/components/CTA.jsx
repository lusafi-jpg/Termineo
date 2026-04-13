import React from 'react';
import './CTA.css';

const CTA = ({ onDemoClick }) => {
  return (
    <section className="cta section-container reveal">
      <div className="cta-content glass glow-orange">
        <h2 className="cta-title">Rejoignez la révolution minière intelligente</h2>
        <p className="cta-text">
          Prêt à sécuriser vos opérations et à optimiser votre rendement ?
          Contactez nos experts pour une démonstration personnalisée.
        </p>
        <div className="cta-actions">
          <button className="primary" onClick={onDemoClick}>Demander une Démo</button>
          <a href="https://wa.me/243858915664?text=Bonjour%20Termineo%2C%20je%20souhaite%20planifier%20un%20entretien." target="_blank" rel="noopener noreferrer">
            <button className="secondary">Nous contacter</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
