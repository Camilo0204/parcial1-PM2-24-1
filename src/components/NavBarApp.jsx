import React from 'react';
import { Link } from 'react-router-dom';
import film from '../assets/film.png'
import film2 from '../assets/film2.jpg'
import reel from '../assets/reel.gif'

const NavBarApp = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src={reel} width="150" height="130"alt=""  />
          <img src={film} width="630" height="130"alt=""  />                    
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              <span style={{ fontSize: '3em' }}>🏠</span>              
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/populares">
              <br/>
                <h4>| +POPULARES |</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cartelera">
                <br/>
                <h4>| EN CARTELERA |</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
       
  );
};


export default NavBarApp;
