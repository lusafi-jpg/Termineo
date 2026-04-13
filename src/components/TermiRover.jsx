import React from 'react';
import './TermiRover.css';
import roverImg from '../assets/rover.png';

const TermiRover = () => {
  const features = [
    { title: "Soil Scanning", desc: "Digital mapping of the underground strata." },
    { title: "Risk Detection", desc: "Automated alert for structural instability." },
    { title: "Real-time Data", desc: "Live integration with the Termineo Cloud." }
  ];

  return (
    <section id="termi-rover" className="termi-rover section-container reveal">
      <div className="rover-visual">
        <img src={roverImg} alt="Termi-Rover" className="rover-image glow-orange" />
      </div>
      <div className="rover-info">
        <h2 className="section-title text-glow">Le Termi-Rover</h2>
        <p className="rover-main-desc">
          Un rover autonome conçu pour les environnements hostiles, capable de scanner
          le sol avec une précision millimétrique.
        </p>
        <ul className="rover-features">
          {features.map((f, i) => (
            <li key={i} className="rover-feature-item">
              <span className="feature-icon"></span>
              <div>
                <strong>{f.title}</strong>
                <p>{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="primary">Données Techniques</button>
      </div>
    </section>
  );
};

export default TermiRover;
