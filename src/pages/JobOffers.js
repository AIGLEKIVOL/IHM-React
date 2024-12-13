import React, { useState } from 'react';
import './Talents.css';
import webdev from './img/webdev.JPG'; 
import cyber from './img/cyber.JPG'; 
import dataAna from './img/dataAna.JPG'; 
import machine from './img/machine.JPG';

// Données fictives des offres d'emploi
const jobOffers = [
  {
    id: 1,
    title: 'Data Analyst Mission',
    salary: 15,
    duration: 30, // Durée en jours
    tags: ['data analyst', 'machine learning'],
    description: "Le Data Analyst aura pour mission d'extraire, de nettoyer et d'analyser les données provenant des ventes pour identifier des tendances, des opportunités et des pistes d'amélioration. Il devra collaborer avec l'équipe marketing pour mesurer l'efficacité des campagnes et produire des rapports visuels à l'aide de Power BI ou Tableau.",
    image: dataAna,

  },
  {
    id: 2,
    title: 'Web Developer Project',
    salary: 15,
    duration: 60,
    tags: ['web developer', 'cybersecurity'],
    description: "Le développeur web sera chargé de concevoir et de développer une plateforme e-commerce de bout en bout. Cela inclut la création d'une interface utilisateur moderne et responsive, l'intégration d'une base de données pour la gestion des produits et commandes, ainsi que la mise en place d'un système de paiement sécurisé. Le projet nécessitera également des tests approfondis pour garantir des performances optimales et une expérience utilisateur fluide.",

    image: webdev,

  },
  {
    id: 3,
    title: 'Cybersecurity Specialist',
    salary: 25,
    duration: 45,
    tags: ['cybersecurity'],
    description:"Le consultant en cybersécurité sera chargé d'effectuer un audit complet de l'infrastructure réseau de l'entreprise pour identifier les failles potentielles et renforcer la sécurité. Il devra analyser les politiques actuelles, effectuer des tests de pénétration, et proposer un plan d'action détaillé pour protéger les données sensibles.",
    image: cyber,

  },
  {
    id: 4,
    title: 'Machine Learning Engineer',
    salary: 20,
    duration: 40,
    tags: ['machine learning', 'data analyst'],
    description:"L'ingénieur en machine learning sera chargé de concevoir, entraîner et déployer un modèle prédictif capable d'anticiper la demande des clients en fonction des données historiques de ventes. Cela inclut la collecte et la préparation des données, la sélection de modèles adaptés (régression, arbres de décision, réseaux neuronaux) et l'évaluation des performances. Le modèle devra être optimisé pour une utilisation en production.",
    image: machine,
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
    const salaryMatches = !salaryFilter || job.salary >= salaryFilter;
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
          <label>Montant de la mission min (par heure)</label>
          <input
            type="number"
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
            placeholder="Min"
          />
        </div>

        <div className="filter-item">
          <label>Durée max (en jours)</label>
          <input
            type="number"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            placeholder="Max"
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
    {filteredJobs.length > 0 ? (
      filteredJobs.map((job) => (
        <div key={job.id} className="profile-card">
          {/* Conteneur texte à gauche, maintenant affiché verticalement */}
          <div className="profile-info">
          <h4>{job.title}</h4>
            <p>Salaire: ${job.salary}/heure</p>
            <p>Durée estimée: {job.duration} jours</p>
            <p>Description de la mission : {job.description} </p>
            <p>Tags: {job.tags.join(', ')}</p>
            <button onClick={() => handleJobClick(job)}>Contacter l'employeur</button>
          </div>

          {/* Image à droite */}
          <img src={job.image} className="talent-image" />
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