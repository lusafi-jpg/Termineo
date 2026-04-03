import React from 'react';
import './TelluRover.css';
import roverImg from '../assets/rover.png';

const TelluRover = () => {
  const features = [
    { title: "Soil Scanning", desc: "Digital mapping of the underground strata." },
    { title: "Risk Detection", desc: "Automated alert for structural instability." },
    { title: "Real-time Data", desc: "Live integration with the TELLU cloud." }
  ];

  return (
    <section id="tellu-rover" className="tellu-rover section-container reveal">
      <div className="rover-visual">
        <img src={roverImg} alt="Tellu-Rover" className="rover-image glow-orange" />
      </div>
      <div className="rover-info">
        <h2 className="section-title text-glow">Le Tellu-Rover</h2>
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

export default TelluRover;
