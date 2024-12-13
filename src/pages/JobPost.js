import React, { useState } from 'react'; 
import './JobPost.css';

function JobPost() {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    hourlyRate: '',
    tags: [],
    experienceLevel: '',
    duration: 1,
  });

  const [newTag, setNewTag] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (field, value) => {
    setJobData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setJobData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag.trim()],
      }));
      setNewTag('');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir publier cette annonce ?');
    if (confirmed) {
      console.log(jobData);
      alert('Annonce publiée avec succès !');
    }
  };

  return (
    <div className="job-post-page">
      <h1>Poster une annonce de travail</h1>
      
      <div className="job-post-form">
        {/* Titre de l'annonce */}
        <div className="form-group">
          <label htmlFor="title">Titre de l'annonce</label>
          <input
            type="text"
            id="title"
            value={jobData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            placeholder="Indiquez l'objectif principal de la mission (Ex : Dessiner un logo, aide juridique, Refonte graphique d'une application...)"
          />
        </div>

        {/* Description de l'annonce */}
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={jobData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Décrivez les détails de la mission (contexte, exigences, compétences requises, durée, etc.)"
          />
        </div>
              {/* Durée de la mission */}
              <div className="form-group">
          <label htmlFor="duration">Durée de la mission (en mois) :</label>
          <input
            type="number"
            id="duration"
            value={jobData.duration}
            onChange={(e) => handleInputChange('duration', Math.max(1, e.target.value))}
            min="1"
          />
        </div>

        {/* Salaire horaire */}
        <div className="form-group">
          <label htmlFor="hourlyRate">Salaire horaire (€) :</label>
          <input
            type="number"
            id="hourlyRate"
            value={jobData.hourlyRate}
            onChange={(e) => {
              const value = Math.max(1, e.target.value);
              handleInputChange('hourlyRate', value);
            }}
            placeholder="Exemple : 20"
          />
        </div>

        {/* Tags */}
        <div className="form-group">
          <label>Tags :</label>
          <div className="tags-container">
            {jobData.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Ajoutez les tags un par un. Exemple de tag : Design, secrétariat, Data, React ..."
          />
          <button onClick={handleAddTag}>Ajouter</button>
        </div>

        {/* Niveau d'expérience */}
        <div className="form-group">
          <label>Niveau d'expérience requis :</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="experience"
                value="pas d'expérience"
                checked={jobData.experienceLevel === "pas d'expérience"}
                onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
              />
              Pas d'expérience
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="peu d'expérience"
                checked={jobData.experienceLevel === "peu d'expérience"}
                onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
              />
              Peu d'expérience
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="beaucoup d'expérience"
                checked={jobData.experienceLevel === "beaucoup d'expérience"}
                onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
              />
              Beaucoup d'expérience
            </label>
          </div>
        </div>

  

        {/* Ajouter une image */}
        <div className="form-group">
          <label htmlFor="imageUpload">Ajouter une image :</label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <div className="image-preview">
              <img src={selectedImage} alt="Preview" />
            </div>
          )}
        </div>

        {/* Bouton de soumission */}
        <button className="submit-button" onClick={handleSubmit}>
          Publier l'annonce
        </button>
      </div>
    </div>
  );
}

export default JobPost;
