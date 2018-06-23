import React, { Component } from "react";
import FriendList from "./FriendList";
import "./Friend.css";
import friends from "./friends.json";


class Friend extends Component {
  state= {
    friends
  };


render() {
  return (

    <div className="friendCard">
      {this.state.friends.map(friend => (
        <FriendList
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        age={friend.age}
        />
      ))}
      </div>
    );
  }
}

export default Friend;