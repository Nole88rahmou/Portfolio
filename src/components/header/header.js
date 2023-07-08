import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Meradji Abderrahim</div>
      <nav className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>
        <Link to ='/reviews'> Témoignages</Link>
      </nav>
    </header>
  );
}

export default Header;
