import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const getActiveClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <NavLink to="/" className={getActiveClass}>
            <img src="https://media.licdn.com/dms/image/D560BAQH4A7srdAYq6Q/company-logo_200_200/0/1694531781563?e=2147483647&v=beta&t=ePU1Zj-pSWrQaSDKNks2YrQEC1N-I-vmrmHiHPzvxhw" alt="Logo" className="logo" />
            {/* we can change the above url to any imagee .jpg or .png */}
            <span className="brand-name">HyggeX</span>
          </NavLink>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={getActiveClass} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/flashcard" className={getActiveClass}>
                Flashcard
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getActiveClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={getActiveClass}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={getActiveClass}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;