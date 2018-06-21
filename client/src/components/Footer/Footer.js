import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <nav className="nav justify-content-around">
      <div className="row justify-content-around">
        <button role="presentation" className="nav-item"> <a href="/discover"> <span className="fas fa-beer fa-3X"></span></a></button>
        <button role="presentation" className="nav-item"><span className="fas fa-users"></span></button>
        <button role="presentation" className="nav-item dropdown"><span className="fas fa-bars"></span></button>
      </div>
    </nav>
  </footer>
);

export default Footer;


