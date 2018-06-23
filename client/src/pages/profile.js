import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
   
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  getUser() {
    axios.get('/user/', function(req,res) {
      }).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
        });
      } 
    })
  }
    

  render() {
    const fontStyles = {
      fontSize: 100
    };
    const imageStyle = {
      width: 400
    };

// if (this.state.loggedIn) {
    return (
        <div>
        {this.props.loggedIn ? (<div> I Am logged In </div>) : 
        ( <h1> PLEASE LOG IN </h1>)}

      
        <h1>Profile Page</h1>
        <div className="userInfo">
          <ul>
            <li> Logged In: {this.props.loggedIn && <span>True</span>} </li>
            <li> First Name: {this.props.firstName} </li>
            <li> Last Name: {this.props.lastName} </li>
            <li> Email: {this.props.email} </li>
            <li> Liked Bars: </li>
            <li> Disliked Bars: </li>
          </ul>
        </div>
      </div>
    );
// }

  }
}

export default Profile