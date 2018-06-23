import React from "react";
import "./Footer.css";
import DropdownButton from "../DropdownButton/DropdownButton.js"

const Footer = () => (
  <footer className="footer">
    <nav className="nav justify-content-around">
      <div className="row justify-content-around">
        <button role="presentation" className="nav-item"> <a href="/discover"> <span className="fas fa-beer fa-3X"></span></a></button>
        <button role="presentation" className="nav-item"><span className="fas fa-users"></span></button>
      <DropdownButton/>
      </div>
    </nav>
  </footer>
);

export default Footer;
