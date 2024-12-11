import React, { useState } from 'react';
import './Profile.css';
import profileImg from './img/salameche.JPG'; // Import de l'image
import Popup from './Popup';


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
  const [portfolio, setPortfolio] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

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
      reader.readAsDataURL(file); // Convertit l'image en base64
    }
}

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
            placeholder="Add a tag"
          />
          <button onClick={handleAddTag}>Add Tag</button>
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-text-fields">
          <textarea
            placeholder="Profile Description"
            value={profileData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          <textarea
            placeholder="Curriculum"
            value={profileData.curriculum}
            onChange={(e) => handleInputChange('curriculum', e.target.value)}
          />
          <textarea
            placeholder="Experiences"
            value={profileData.experiences}
            onChange={(e) => handleInputChange('experiences', e.target.value)}
          />
          <textarea
            placeholder="Qualifications"
            value={profileData.qualifications}
            onChange={(e) => handleInputChange('qualifications', e.target.value)}
          />
        </div>
        <div className="profile-numeric-fields">
        <label>
            Jobs Done:
            <input
            type="number"
            value={profileData.jobsDone}
            onChange={(e) => handleInputChange('jobsDone', e.target.value)}
            placeholder="Enter a number"
            />
        </label>
        <label>
            Hours Worked:
            <input
            type="number"
            value={profileData.hoursWorked}
            onChange={(e) => handleInputChange('hoursWorked', e.target.value)}
            placeholder="Enter a number"
            />
        </label>
        </div>
      </div>

      <div className="portfolio-section">
        <h3>Portfolio</h3>
        <button onClick={() => setPopupVisible(true)}>+ Ajouter une instance</button>
        <ul>
          {portfolio.map((instance, index) => (
            <li key={index}>
              <p><strong>Date :</strong> {instance.date}</p>
              <p><strong>Description :</strong> {instance.description}</p>
              <p><strong>Langage :</strong> {instance.language}</p>
              <p><strong>Durée :</strong> {instance.duration} jours</p>
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
    </div>
  );
}

export default Profile;