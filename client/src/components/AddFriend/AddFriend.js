import React from "react";
import "./AddFriend.css";

const AddFriend = props => (
  <button
    onClick={props.onClick.bind(this,props.id)}
    data-value={props.id}
    type="button"
    className="btn btn-default AddFriend"
  >
    {console.log(JSON.stringify(props) + "addfriend")}
    <span className="fas fa-plus"></span>
  </button>
);

export default AddFriend;
