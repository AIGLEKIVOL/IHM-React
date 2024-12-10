import React, { useState } from 'react';
import './Talents.css';

// Données fictives des offres d'emploi
const jobOffers = [
  {
    id: 1,
    title: 'Data Analyst Mission',
    salary: 50,
    duration: 30, // Durée en jours
    tags: ['data analyst', 'machine learning'],
  },
  {
    id: 2,
    title: 'Web Developer Project',
    salary: 60,
    duration: 60,
    tags: ['web developer', 'cybersecurity'],
  },
  {
    id: 3,
    title: 'Cybersecurity Specialist',
    salary: 80,
    duration: 45,
    tags: ['cybersecurity'],
  },
  {
    id: 4,
    title: 'Machine Learning Engineer',
    salary: 70,
    duration: 40,
    tags: ['machine learning', 'data analyst'],
  },
];

function JobOffers() {
  const [salaryFilter, setSalaryFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [tagsFilter, setTagsFilter] = useState([]);
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [message, setMessage] = useState('');

  const handleTagChange = (event) => {
    const value = event.target.value;
    setTagsFilter((prevTags) =>
      prevTags.includes(value)
        ? prevTags.filter((tag) => tag !== value)
        : [...prevTags, value]
    );
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setContactModalVisible(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du message ou autre action
    alert(`Message envoyé à l'employeur pour le job "${selectedJob.title}": ${message}`);
    setMessage('');
    setContactModalVisible(false);
  };

  const filteredJobs = jobOffers.filter((job) => {
    const salaryMatches = !salaryFilter || job.salary <= salaryFilter;
    const durationMatches = !durationFilter || job.duration <= durationFilter;
    const tagsMatch =
      tagsFilter.length === 0 || tagsFilter.every((tag) => job.tags.includes(tag));

    return salaryMatches && durationMatches && tagsMatch;
  });

  return (
    <div className="talents-page">
      {/* Filtres */}
      <div className="filters-bar">
        <div className="filter-item">
          <label>Montant de la mission Max</label>
          <input
            type="number"
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
            placeholder="Max"
          />
        </div>

        <div className="filter-item">
          <label>Durée Max (en jours)</label>
          <input
            type="number"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            placeholder="Max"
          />
        </div>

        <div className="filter-item">
          <label>TAGS</label>
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
        <h3>Offres de mission</h3>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="profile-card">
              <h4>{job.title}</h4>
              <p>Salaire: ${job.salary}/jour</p>
              <p>Durée: {job.duration} jours</p>
              <p>Tags: {job.tags.join(', ')}</p>
              <button onClick={() => handleJobClick(job)}>Contacter l'employeur</button>
            </div>
          ))
        ) : (
          <p>Aucune offre ne correspond aux critères</p>
        )}
      </div>

      {/* Modale de contact */}
      {contactModalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Contacter l'employeur pour le job "{selectedJob.title}"</h2>
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

export default JobOffers;