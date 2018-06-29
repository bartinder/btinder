import React from "react";
import "./Footer.css";
import DropdownButton from "../DropdownButton/DropdownButton.js"

const Footer = (props) => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-4">
          <button role="presentation" className="nav-item"> <a href="/discover"> <span className="fas fa-beer fa-3X"></span></a></button>
        </div>
        <div className="col-4">
          <button role="presentation" className="nav-item"> <a href="/friends"><span className="fas fa-users"></span></a></button>
        </div>
        <div className="col-4">
          <DropdownButton src={props.src} firstName={props.firstName} lastName={props.lastName}/>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
