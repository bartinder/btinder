import React from "react";
import "./Button.css";

const Button = () => (

  <div className="btn-group justify-content-around" role="group" aria-label="...">
    <button type="button" className="btn btn-default"><span className="fas fa-step-forward"></span></button>
    <button type="button" className="btn btn-default"><span className="fas fa-thumbs-down"></span></button>
    <button type="button" className="btn btn-default"><span className="fas fa-thumbs-up"></span></button>
  </div>
  );
  
  export default Button;