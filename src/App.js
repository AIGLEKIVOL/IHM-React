import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Headbar from './components/Header';
import JobOffers from './pages/JobOffers';
import Talents from './pages/Talents';
import Profile from './pages/Profile';
import Login from './pages/LogIn';
import JobPost from './pages/JobPost';


function App() {
  
  return (
    <Router>
      <Headbar />
      <Routes>
         
        <Route path="/" element={<Login />} />
        <Route path="/joboffers" element={<JobOffers />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobpost" element={<JobPost />} />
      </Routes>
    </Router>
  );
}

export default App;