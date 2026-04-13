import React, { useState } from 'react';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [urgency, setUrgency] = useState('FAIBLE');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const request = {
      id: Date.now(),
      nom: formData.get('nom'),
      email: formData.get('email'),
      entreprise: formData.get('entreprise'),
      secteur: formData.get('secteur'),
      urgence: formData.get('urgence'),
      message: formData.get('message'),
      status: 'En attente',
      date: new Date().toLocaleString('fr-FR')
    };

    // Save to localStorage
    const existingRequests = JSON.parse(localStorage.getItem('demoRequests') || '[]');
    localStorage.setItem('demoRequests', JSON.stringify([...existingRequests, request]));

    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="modal-overlay reveal">
      <div className="modal-content glass glow-orange">
        <button className="close-button" onClick={onClose}>&times;</button>
        {!isSubmitted ? (
          <>
            <h2 className="modal-title">Demander une Démonstration</h2>
            <p className="modal-subtitle">Nos experts vous contacteront sous 24h pour organiser une présentation personnalisée.</p>
            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom Complet</label>
                <input name="nom" type="text" placeholder="Ex: Jean Dupont" required />
              </div>
              <div className="form-group">
                <label>Email Professionnel</label>
                <input name="email" type="email" placeholder="jean.dupont@entreprise.com" required />
              </div>
              <div className="form-group">
                <label>Entreprise</label>
                <input name="entreprise" type="text" placeholder="Ex: Gecamines" required />
              </div>
              <div className="form-group">
                <label>Secteur d'activité</label>
                <select name="secteur" required>
                  <option value="">Sélectionnez un secteur</option>
                  <option value="mining">Extraction Minière</option>
                  <option value="research">Géologie & Recherche</option>
                  <option value="tech">Technologie</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label>Niveau d'Urgence</label>
                <div className="alert-buttons-form">
                  {[
                    { val: 'FAIBLE', label: 'Vert', class: 'low' },
                    { val: 'MOYEN', label: 'Orange', class: 'medium' },
                    { val: 'CRITIQUE', label: 'Rouge', class: 'high' }
                  ].map((level) => (
                    <button
                      key={level.val}
                      type="button"
                      className={`alert-btn-form ${level.class} ${urgency === level.val ? 'active' : ''}`}
                      onClick={() => setUrgency(level.val)}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="urgence" value={urgency} />
              </div>
              <div className="form-group">
                <label>Message / Besoins spécifiques</label>
                <textarea name="message" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="submit" className="primary submit-btn">Envoyer ma demande</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Merci !</h2>
            <p>Votre demande a été envoyée avec succès. Nous reviendrons vers vous très prochainement.</p>
            <div className="loader-ring"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
