import React from "react";
import "./Card.css";
import Button from "../Button";

const Card = props => (
  <div>
    <div className="row">
      <div className="col-s12 col-m6 mx-auto">
        <div className="card">
          <img className="card-img-top" src="https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Raleigh Times</h5>
            <p className="card-text">14 E Hargett St, Raleigh, NC 27601</p>
            <p className="card-text">Rating: 5</p>
            <p className="card-text">Demographic: 23-30</p>
          </div>
          <Button 
            onClick = {props.handleBtnClick}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Card;
