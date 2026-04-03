import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = ({ onBack }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadRequests();
    }
  }, [isAuthenticated]);

  const loadRequests = () => {
    const data = JSON.parse(localStorage.getItem('demoRequests') || '[]');
    setRequests(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'azerty12') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const handleGrant = (id) => {
    const updated = requests.map(req => 
      req.id === id ? { ...req, status: 'Accordée' } : req
    );
    localStorage.setItem('demoRequests', JSON.stringify(updated));
    setRequests(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette demande ?')) {
      const updated = requests.filter(req => req.id !== id);
      localStorage.setItem('demoRequests', JSON.stringify(updated));
      setRequests(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Voulez-vous vraiment tout effacer ?')) {
      localStorage.setItem('demoRequests', '[]');
      setRequests([]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card glass glow-orange reveal">
          <h2>Accès Administrateur</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Mot de passe</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Entrez le mot de passe"
                required 
              />
            </div>
            {error && <p className="error-text">{error}</p>}
            <div className="admin-login-buttons">
              <button type="button" className="secondary" onClick={onBack}>Retour</button>
              <button type="submit" className="primary">Connexion</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard container-padding reveal">
      <div className="admin-header">
        <h1>Tableau de Bord - Demandes de Démo</h1>
        <div className="admin-actions">
          <button className="secondary" onClick={handleClearAll}>Tout effacer</button>
          <button className="primary" onClick={onBack}>Quitter l'Admin</button>
        </div>
      </div>

      <div className="requests-table-container glass">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Entreprise</th>
              <th>Secteur</th>
              <th>Message</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty-state">Aucune demande pour le moment.</td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.date}</td>
                  <td>{req.nom}</td>
                  <td>{req.email}</td>
                  <td>{req.entreprise}</td>
                  <td>{req.secteur}</td>
                  <td className="msg-cell" title={req.message}>{req.message || '-'}</td>
                  <td>
                    <span className={`status-badge ${req.status === 'Accordée' ? 'granted' : 'pending'}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    {req.status !== 'Accordée' && (
                      <button className="grant-btn" onClick={() => handleGrant(req.id)}>Accorder</button>
                    )}
                    <button className="delete-btn" onClick={() => handleDelete(req.id)}>&times;</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
