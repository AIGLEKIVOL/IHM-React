import React, { useState , useRef} from 'react';
import './Profile.css';
import profileImg from './img/salameche.JPG'; // Import de l'image
import Popup from './Popup';
import './Popup.css';

function Profile() {
  const [profileData, setProfileData] = useState({
    description: '',
    curriculum: '',
    experiences: '',
    qualifications: '',
    jobsDone: '',
    hoursWorked: '',
    tags: [],
    portfolio: [],
  });

  const [newTag, setNewTag] = useState('');
  const [newProject, setNewProject] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(profileImg);
  const [additionalPhoto, setAdditionalPhoto] = useState(null); // Nouvelle photo
  const [portfolio, setPortfolio] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  const fileInputRef = useRef(null); // Référence pour l'input file

  const handleAddInstance = (instance) => {
    setPortfolio([...portfolio, instance]);
  };

  const handleInputChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setProfileData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag.trim()],
      }));
      setNewTag('');
    }
  };

  const handleAddProject = () => {
    if (newProject.trim()) {
      setProfileData((prevData) => ({
        ...prevData,
        portfolio: [...prevData.portfolio, newProject.trim()],
      }));
      setNewProject('');
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAdditionalPhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour déclencher le clic sur l'input via la référence
  const handleClickOnFrame = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-photo">
          <img src={profilePhoto} alt="Profile" className="profile-img" />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handlePhotoChange}
          />
        </div>
        <div className="profile-names">
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) =>
              setProfileData({ ...profileData, firstName: e.target.value })
            }
            placeholder="Prénom"
            className="name-input"
          />
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) =>
              setProfileData({ ...profileData, lastName: e.target.value })
            }
            placeholder="Nom"
            className="name-input"
          />
        </div>
        <div className="profile-tags">
          <h3>Tags</h3>
          <div className="tags-container">
            {profileData.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Web dev, data analyst"
          />
          <button className="add-tag-button" onClick={handleAddTag}>
            Ajout d'un tag
          </button>
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-text-fields">
          <textarea
            placeholder="Description : Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web et mobiles."
            value={profileData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          <textarea
            placeholder="Curriculum : Master en Informatique, Université de Paris, 2018. Formation en Machine Learning et en Développement Web."
            value={profileData.curriculum}
            onChange={(e) => handleInputChange('curriculum', e.target.value)}
          />
          <textarea
            placeholder="Expériences : 1. Développeur Frontend chez TechCorp (2019-2021). Ingénieur Logiciel chez Innovatech (2021-2023)"
            value={profileData.experiences}
            onChange={(e) => handleInputChange('experiences', e.target.value)}
          />
          <textarea
            placeholder="Langages utilisés : React.js, Node.js, Python, Django, SQL, et AWS."
            value={profileData.qualifications}
            onChange={(e) => handleInputChange('qualifications', e.target.value)}
          />
        </div>
        {/** 
        <div className="profile-numeric-fields">
          <label>
            Nombre de missions effectuées:
            <input
              type="number"
              value={profileData.jobsDone}
              onChange={(e) => handleInputChange('jobsDone', e.target.value)}
              placeholder="Entrer un nombre"
            />
          </label>
          <label>
            Nombre d'heures réalisées:
            <input
              type="number"
              value={profileData.hoursWorked}
              onChange={(e) => handleInputChange('hoursWorked', e.target.value)}
              placeholder="Entrer un nombre"
            />
          </label>
        </div>
        **/}
      </div>

      <div className="portfolio-section">
        <h3>Portfolio</h3>
        <button onClick={() => setPopupVisible(true)}>
          + Ajouter une mission/projet
        </button>
        <ul>
          {portfolio.map((instance, index) => (
            <li key={index}>
              <p>
                <strong>Date :</strong> {instance.date}
              </p>
              <p>
                <strong>Description :</strong> {instance.description}
              </p>
              <p>
                <strong>Langage :</strong> {instance.language}
              </p>
              <p>
                <strong>Durée :</strong> {instance.duration} jours
              </p>
            </li>
          ))}
        </ul>
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => setPopupVisible(false)}
          onSave={handleAddInstance}
        />
      )}

      {/* Nouvelle section pour une image additionnelle */}
      <div className="additional-photo-section">
        <h3>Vitrine</h3>
        <div className="additional-photo-frame" onClick={handleClickOnFrame}>
          {additionalPhoto ? (
            <img
              src={additionalPhoto}
              alt="Additional"
              className="additional-photo-img"
            />
          ) : (
            <p className="additional-photo-placeholder">
              Ajoutez un visuel qui représente ce que vous faites de mieux (Infographie, page d'accueuil de votre site, sérigraphie...)
            </p>
          )}
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={fileInputRef} // Lier l'input à la référence
          style={{ display: 'none' }} // Le rendre invisible
          onChange={handleAdditionalPhotoChange}
        />
      </div>
    </div>
  );
}

export default Profile;