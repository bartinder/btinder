import React, { Component } from "react";
import FriendList from "./FriendList";
import "./Friend.css";
import API from "../utils/API";



class Friend extends Component {
  state= {
    users: []
  }


render() {
  console.log(this.props.users)
  return (
    <div>
      {this.props.users.length ? ( 
    <div className="friendCard">
      {this.props.users.map(user => (
        <FriendList
        id={user._id}
        key={user._id}
        profilePicture={user.profilePicture}
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
        />
      ))}
      </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
      </div>
      );
  }
}

export default Friend;