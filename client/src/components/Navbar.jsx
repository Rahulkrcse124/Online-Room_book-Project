import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  
  return (
    <>
      {/* Navbar section start from here */}

      <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              Preferred Resorts
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav menu-navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/rooms">Rooms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item mt-3 mt-lg-0">
                  <a className="main-btn" href="/register">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Navbar section ends here */}

    </>
  )
}

export default Navbar