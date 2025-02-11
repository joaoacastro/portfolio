import React from "react";
import "./Navbar.css";

import brazilFlag from "../img/ico/brazil-flag.png";
import usaFlag from "../img/ico/usa-flag.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="languages">
          <img src={brazilFlag} className="brazil-flag" alt="Brazil Flag" />
          <img src={usaFlag} className="usa-flag" alt="USA Flag" />
        </div>
        <div className="links">
          <NavLink className="navlink" to="/home">Home</NavLink>
          <NavLink className="navlink" to="/about">About</NavLink>
          <NavLink className="navlink" to="/skills">Skills</NavLink>
          <NavLink className="navlink" to="/projects">Projects</NavLink>
          <NavLink className="navlink" to="/contact">Contact</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
