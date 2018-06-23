import React from "react";
import "./Card.css";
import Button from "../Button";

const Card = props => (
  <div>
    <div className="row">
      <div className="col-s12 col-m6 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.pic} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.address}</p>
            <p className="card-text">{props.rating}</p>
            <p className="card-text">Demographic: 23-30</p>
          </div>
          <Button onClick={props.handleBtnClick} />
        </div>
      </div>
    </div>
  </div>
);

export default Card;
