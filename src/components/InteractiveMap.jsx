import React from 'react';
import './InteractiveMap.css';

const InteractiveMap = () => {
  return (
    <section className="interactive-map section-container reveal">
      <h2 className="section-title text-glow">Cartographie Interactive</h2>
      <div className="map-view glass">
        <div className="map-overlay">
          <div className="scan-circle"></div>
          <div className="hotspot" style={{ top: '30%', left: '40%' }}>
            <div className="ping"></div>
            <span className="tooltip">Zone A - Stable</span>
          </div>
          <div className="hotspot alert" style={{ top: '60%', left: '70%' }}>
            <div className="ping red"></div>
            <span className="tooltip">Zone F - Anomalie Détectée</span>
          </div>
          <div className="hotspot" style={{ top: '45%', left: '20%' }}>
            <div className="ping"></div>
            <span className="tooltip">Zone C - Analyse en cours</span>
          </div>
        </div>
        <div className="map-grid"></div>
      </div>
      <p className="map-legend">Surveillance en temps réel des couches géologiques.</p>
    </section>
  );
};

export default InteractiveMap;
