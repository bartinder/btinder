import React from "react";
import "./Button.css";

const Button = (props) => (

  <div className="btn-group justify-content-around" role="group" aria-label="...">
    <button onClick={props.onClick} data-value="skip" id="skip" type="button" className="btn btn-default" {...props}><span data-value="skip" className="fas fa-step-forward"></span></button>
    <button onClick={props.onClick} data-value="dislike" id="dislike" type="button" className="btn btn-default" {...props}><span data-value="dislike" className="fas fa-thumbs-down"></span></button>
    <button onClick={props.onClick} data-value="like" id="like" type="button" className="btn btn-default" {...props}><span data-value="like" className="fas fa-thumbs-up"></span></button>
  </div>
  );
  
  export default Button;


