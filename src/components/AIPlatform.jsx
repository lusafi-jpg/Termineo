import React, { useState } from 'react';
import './AIPlatform.css';

const AIPlatform = () => {
  const [activeTab, setActiveTab] = useState('Tableau de Bord');

  const widgets = [
    { title: "Statut Système", value: "OPÉRATIONNEL", sub: "98% efficacité" },
    { title: "Points Critiques", value: "14", sub: "Détectés ces 24h" },
    { title: "Niveau de Risque", value: "FAIBLE", color: "#00ff88" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Tableau de Bord':
        return (
          <>
            <div className="widgets">
              {widgets.map((w, i) => (
                <div key={i} className="widget glass">
                  <span className="widget-title">{w.title}</span>
                  <span className="widget-value" style={{ color: w.color || 'var(--accent-orange)' }}>{w.value}</span>
                  <span className="widget-sub">{w.sub}</span>
                </div>
              ))}
            </div>
            <div className="main-chart glass">
              <h3>Visualisation de Zone de Risque</h3>
              <div className="placeholder-chart">
                <div className="scan-line"></div>
                <div className="data-points">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="dot" style={{
                      left: `${Math.random() * 90}%`,
                      top: `${Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'Cartographie GPS':
        return (
          <div className="dashboard-page glass reveal">
            <h3>Cartographie GPS Haute Précision</h3>
            <p>Localisation en temps réel du Termi-Rover et des points de forage.</p>
            <div className="placeholder-map glass">
              <div className="gps-marker"></div>
              <p className="coord">Coords: 45.123, -12.456</p>
            </div>
          </div>
        );
      case 'Analyse Sols':
        return (
          <div className="dashboard-page glass reveal">
            <h3>Modélisation de l'Analyse des Sols</h3>
            <div className="analysis-grid">
              <div className="analysis-item">
                <span className="label">Densité</span>
                <div className="bar"><div className="fill" style={{ width: '75%' }}></div></div>
              </div>
              <div className="analysis-item">
                <span className="label">Humidité</span>
                <div className="bar"><div className="fill" style={{ width: '40%' }}></div></div>
              </div>
              <div className="analysis-item">
                <span className="label">Cavités Détectées</span>
                <span className="value">Aucune</span>
              </div>
            </div>
          </div>
        );
      case 'Alertes Temps Réel':
        return (
          <div className="dashboard-page glass reveal">
            <h3>Centre d'Alertes</h3>
            <ul className="alerts-list">
              <li className="alert-item high">
                <strong>Critique:</strong> Vibration de terrain détectée - Secteur 4
                <span>Il y a 2 min</span>
              </li>
              <li className="alert-item">
                <strong>Info:</strong> Scan de routine terminé - Secteur 1
                <span>Il y a 15 min</span>
              </li>
            </ul>
          </div>
        );
      case 'Historique':
        return (
          <div className="dashboard-page glass reveal">
            <h3>Historique des Données</h3>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Action</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>03/04/2026</td>
                  <td>Scan Tomographique</td>
                  <td className="status-ok">Succès</td>
                </tr>
                <tr>
                  <td>02/04/2026</td>
                  <td>Maintenance Rover</td>
                  <td className="status-ok">Complet</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  const menuItems = [
    'Tableau de Bord',
    'Cartographie GPS',
    'Analyse Sols',
    'Alertes Temps Réel',
    'Historique'
  ];

  return (
    <section id="ia" className="ai-platform section-container">
      <h2 className="section-title text-glow">Plateforme IA Termineo</h2>
      <div className="dashboard-grid">
        <div className="dashboard-sidebar glass">
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li
                key={item}
                className={activeTab === item ? 'active' : ''}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AIPlatform;
