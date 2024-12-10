import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Headbar from './components/Header';
import Home from './pages/Home';
import JobOffers from './pages/JobOffers';
import Talents from './pages/Talents';
import Profile from './pages/Profile';
import Login from './pages/LogIn';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Simuler une authentification (à remplacer par une API réelle)
    if (username  && password ) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  return (
    <Router>
      <Headbar />
      <Routes>
         {/* Si non authentifié, redirige vers la page Login */}
         <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/joboffers" element={<JobOffers />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;