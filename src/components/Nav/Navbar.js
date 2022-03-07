import React from 'react';
import './navbar.css';
import Navigation from './Navigation/Navigation';
import MobileNavigation from './Navigation/MobileNavigation';

export default function Navbar() {
  return (
    <div className="navbar1">
      <div id="logo-col" className="logo-container">
        {/* <img className="logo" src={logo} alt="nbifclogo" /> */}
      </div>
      <div className="Navbar">
        <MobileNavigation />
        <Navigation />
      </div>
    </div>
  );
}
