import { NavLink } from 'react-router-dom';
import './Header.css';

function Headbar() {
  return (
    <header className="headbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/joboffers" className={({ isActive }) => (isActive ? 'active' : '')}>
              Job Offers
            </NavLink>
          </li>
          <li>
            <NavLink to="/talents" className={({ isActive }) => (isActive ? 'active' : '')}>
              Talents
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headbar;