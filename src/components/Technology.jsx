import React from 'react';
import './Technology.css';

const Technology = () => {
  const technologies = [
    {
      title: "Robotique Autonome",
      description: "Exploration intelligente des galeries et terrains accidentés sans intervention humaine.",
      icon: ""
    },
    {
      title: "Tomographie Électrique",
      description: "Imagerie haute résolution du sous-sol pour détecter cavités et anomalies minérales.",
      icon: ""
    },
    {
      title: "IA Prédictive",
      description: "Analyse en temps réel pour anticiper les effondrements et optimiser l'extraction.",
      icon: ""
    }
  ];

  return (
    <section id="technology" className="technology section-container">
      <h2 className="section-title text-glow">Technologie de Pointe</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card glass reveal" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="tech-icon">{tech.icon}</div>
            <h3 className="tech-title">{tech.title}</h3>
            <p className="tech-desc">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
