import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const handleLogin = (username, password) => {
    // Simuler une authentification (à remplacer par une API réelle)
    if (username  && password ) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleLogin(username, password)) {
      navigate('/Profile'); // Redirige vers Home après connexion
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;