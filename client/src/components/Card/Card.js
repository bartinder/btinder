import React from "react";
import "./Card.css";
import Button from "../Button";

const Card = props => (
  <div className="barCard">
    <div className="row">
      <div className="col mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.pic} alt="Card image cap" />
          {/* Icon button container */}
          <Button onClick={props.handleBtnClick} />
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                <h2 className="card-title" id="bar">{props.name}</h2>
                <p className="card-text">{props.address}</p>
                <p className="card-text">{props.rating}</p>
                <p className="card-text">Demographic: 23-30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
