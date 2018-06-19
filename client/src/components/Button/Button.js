import React from "react";
import "./Button.css";

const Button = () => (

  <div class="btn-group justify-content-around" role="group" aria-label="...">
    <button type="button" class="btn btn-default"><span className="fas fa-step-forward"></span></button>
    <button type="button" class="btn btn-default"><span className="fas fa-thumbs-down"></span></button>
    <button type="button" class="btn btn-default"><span className="fas fa-thumbs-up"></span></button>
  </div>
  );
  
  export default Button;