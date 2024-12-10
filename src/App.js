import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headbar from './components/Header';
import Home from './pages/Home';
import JobOffers from './pages/JobOffers';
import Talents from './pages/Talents';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Headbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joboffers" element={<JobOffers />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;