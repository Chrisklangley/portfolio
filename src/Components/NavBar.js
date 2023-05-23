import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="title-container">
        <p className="nav-circle"></p>
        <NavLink to="/">
          <p className="my-name">DEVELOP ON CUE</p>
        </NavLink>
        <p className="my-title"></p>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/about" className="link" activeClassName="active-link">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="link" activeClassName="active-link">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="link"
            activeClassName="active-link"
          >
            Projects
          </NavLink>
        </li>
        <li className="no-line">
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
