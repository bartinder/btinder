import React, { Component } from "react";
import FriendList from "./FriendList";
import "./Friend.css";

class Friend extends Component {
  state= {
    users: []
  }

render() {
  console.log(this.props.friends)
  return (
    <div>
      {this.props.users.length ? ( 
    <div className="friendCard mx-auto">
      {this.props.users.map(user => (
        <FriendList
        handleAddFriend = {this.props.handleAddFriend}
        id={user._id}
        key={user._id}
        isFriend={this.props.friends.map(el => el._id).includes(user._id)}
        profilePicture={user.profilePicture}
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
        friendsArray = {user.friendsArray}
        />
      ))}
      </div>
      ) : (
        <h3>No friends to display</h3>
      )}
      </div>
      );
  }
}

export default Friend;
