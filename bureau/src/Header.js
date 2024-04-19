// Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">BUREAU LOGO</a>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Jobs</a>
        <a href="#about">Aanmelden</a>
      </div>
    </div>
  );
}

export default Header;
