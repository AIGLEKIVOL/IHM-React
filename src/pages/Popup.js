import React, { useState } from 'react';

function Popup({ onClose, onSave }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [duration, setDuration] = useState('');

  const handleSave = () => {
    if (date && description && language && duration) {
      onSave({ date, description, language, duration });
      onClose();
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Ajouter une instance</h3>
        <div>
          <label>Date :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description de l'instance"
          />
        </div>
        <div>
          <label>Langage :</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Langage utilisé"
          />
        </div>
        <div>
          <label>Durée (en jours) :</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Durée de la mission"
          />
        </div>
        <div className="popup-actions">
          <button onClick={handleSave}>Sauvegarder</button>
          <button onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;