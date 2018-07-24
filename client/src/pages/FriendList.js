import React from "react";
import AddFriend from "../components/AddFriend";
import InviteFriend from "../components/InviteFriend";
import API from "../utils/API";

const FriendList = props => (
  <div className="card">
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
    </div>
  </div>
);

export default FriendList;
