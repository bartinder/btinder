import React from "react";
import AddFriend from "../components/AddFriend";
import InviteFriend from "../components/InviteFriend";
import API from "../utils/API";

const FriendList = props => (
  <div className="card" style={{marginBottom:"5px"}}>
    <div className="card-body">
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <img
            alt="profile"
            src={props.profilePicture || "https://placehold.it/300x300"}
            style={{height: 100 + 'px'}}
            className="rounded img-fluid mx-auto d-block"
          />
        </div>
        <div className="col-4">
          <h3 id="name">{props.firstName} {props.lastName}</h3>
          <p>Age: {props.age}</p>
          {/* <p style={{fontSize:"small"}}>Email: {props.email}</p> */}
        </div>
        <div className="col-4">
          {
            !props.isFriend && 
            <AddFriend
              {...props}
              onClick={props.handleAddFriend}
            />
          }
          <InviteFriend />
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <p>Email: </p>
        </div>
        <div className="col-8">
          <p style={{fontSize:"small"}}>{props.email}</p>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-6" style={{paddingLeft:"0"}}>
          <p>Liked Bars: </p>
        </div>
        <div className="col-6" style={{paddingLeft:"0"}}>
          <div>
          {props.likedBars.map(element => {
              return  <li style={{fontSize:"small"}}> {element} </li>
            })}
          </div>
        </div>
      </div>
      {/* <div className="row d-flex align-items-center">
        <div className="col-6" style={{paddingLeft:"0"}}>
          <p>Disliked Bars: </p>
        </div>
        <div className="col-6" style={{paddingLeft:"0"}}>
          <div>
          {props.dislikedBars.map(element => {
              return  <li style={{fontSize:"small"}}> {element} </li>
            })}
          </div>
        </div>
      </div> */}
    </div>
  </div>
);

export default FriendList;
