import React, { useState } from 'react';
import './Talents.css';

const profiles = [
  {
    id: 1,
    name: 'Alice',
    hourlyRate: 40,
    projectsDone: 10,
    tags: ['data analyst', 'machine learning'],
  },
  {
    id: 2,
    name: 'Bob',
    hourlyRate: 50,
    projectsDone: 15,
    tags: ['web developer', 'cybersecurity'],
  },
  {
    id: 3,
    name: 'Charlie',
    hourlyRate: 35,
    projectsDone: 8,
    tags: ['data analyst', 'web developer'],
  },
  {
    id: 4,
    name: 'Dave',
    hourlyRate: 60,
    projectsDone: 20,
    tags: ['machine learning', 'cybersecurity'],
  },
];

function Talents() {
  const [hourlyRateFilter, setHourlyRateFilter] = useState('');
  const [projectsDoneFilter, setProjectsDoneFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState([]);
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [message, setMessage] = useState('');

  const handleTagChange = (event) => {
    const value = event.target.value;
    setTagsFilter(prevTags =>
      prevTags.includes(value)
        ? prevTags.filter(tag => tag !== value)
        : [...prevTags, value]
    );
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setContactModalVisible(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du message ou autre action
    alert(`Message envoyé à ${selectedProfile.name}: ${message}`);
    setMessage('');
    setContactModalVisible(false);
  };

  const filteredProfiles = profiles.filter((profile) => {
    const hourlyRateMatches =
      !hourlyRateFilter || profile.hourlyRate <= hourlyRateFilter;
    const projectsDoneMatches =
      !projectsDoneFilter || profile.projectsDone >= projectsDoneFilter;
    const tagsMatch =
      tagsFilter.length === 0 ||
      tagsFilter.every((tag) => profile.tags.includes(tag));

    return hourlyRateMatches && projectsDoneMatches && tagsMatch;
  });

  return (
    <div className="talents-page">
      {/* Filtres condensés */}
      <div className="filters-bar">
        <div className="filter-item">
          <label>Salaire Horaire Max</label>
          <input
            type="number"
            value={hourlyRateFilter}
            onChange={(e) => setHourlyRateFilter(e.target.value)}
            placeholder="Max"
          />
        </div>

        <div className="filter-item">
          <label>Projets Réalisés Min</label>
          <input
            type="number"
            value={projectsDoneFilter}
            onChange={(e) => setProjectsDoneFilter(e.target.value)}
            placeholder="Min"
          />
        </div>

        <div className="filter-item">
          <label>Filtres</label>
          <div>
            {['data analyst', 'machine learning', 'web developer', 'cybersecurity'].map((tag) => (
                <label key={tag}>
                <input
                    type="checkbox"
                    value={tag}
                    checked={tagsFilter.includes(tag)}
                    onChange={handleTagChange}
                />
                {tag}
                </label>
            ))}
            </div>
        </div>
    </div>

      <div className="profiles-list">
        <h3>Profils</h3>
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <h4>{profile.name}</h4>
              <p>Salaire horaire: ${profile.hourlyRate}</p>
              <p>Projets réalisés: {profile.projectsDone}</p>
              <p>Tags: {profile.tags.join(', ')}</p>
              <button onClick={() => handleProfileClick(profile)}>Contacter</button>
            </div>
          ))
        ) : (
          <p>Aucun profil trouvé</p>
        )}
      </div>

      {/* Modale de contact */}
      {contactModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Contacter {selectedProfile.name}</h2>
            <form onSubmit={handleContactSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                required
              />
              <button type="submit">Envoyer</button>
              <button
                type="button"
                onClick={() => setContactModalVisible(false)}
              >
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Talents;