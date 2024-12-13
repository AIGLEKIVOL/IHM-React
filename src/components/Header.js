import { NavLink } from 'react-router-dom';
import './Header.css';

function Headbar() {
  return (
    <header className="headbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Connexion
            </NavLink>
          </li>
          <li>
            <NavLink to="/joboffers" className={({ isActive }) => (isActive ? 'active' : '')}>
              Offres d'emploi
            </NavLink>
          </li>
          <li>
            <NavLink to="/talents" className={({ isActive }) => (isActive ? 'active' : '')}>
              Talents
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobpost" className={({ isActive }) => (isActive ? 'active' : '')}>
              Poster une annonce
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headbar;
