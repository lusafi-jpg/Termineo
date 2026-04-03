import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>
      <div className="section-container hero-content reveal">
        <h1 className="hero-title">Sécurisez l’invisible.<br />Anticipez l’avenir.</h1>
        <p className="hero-subtitle">
          Fusionnant la robotique autonome, la tomographie électrique et l’IA, 
          Telluseo transforme la gestion des risques miniers en une puissance prédictive.
        </p>
        <div className="hero-actions">
          <a href="#tellu-rover">
            <button className="primary glow-orange">Découvrir le Tellu-Rover</button>
          </a>
          <a href="#ia">
            <button className="secondary">Voir la plateforme IA</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
