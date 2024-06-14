import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navigation.css'

const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/tattoo" 
              className={({ isActive }) => isActive ? 'active' : ''}>
              Tattoo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/price" 
              className={({ isActive }) => isActive ? 'active' : ''}>
              Price
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/reviews" 
              className={({ isActive }) => isActive ? 'active' : ''}>
              Reviews
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/references" 
              className={({ isActive }) => isActive ? 'active' : ''}>
              References
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
