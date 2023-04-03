import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { auth } from "../../Firebase/configFirebase";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Books World
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-links">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              {auth.signOut()}
              Signout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
