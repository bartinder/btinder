import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API"

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: null,
      likedBars: "",
      friendsArray: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
      likedBars: this.props.likedBars
    });
    console.log("Liked Bars Array:", this.props.likedBars)
    console.log("Friends Array", this.props.friendsArray)
    console.log("Friends First Name", this.props.friendsFirstName)
  }

  getUser() {
    axios.get("api/users", function(req, res) {}).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          id: response.data.user._id,
          friendsArray: response.data.user.friendsArray
        });
      }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    API.updateUser(this.state);
  }

  render() {
    return (
      <div>
      <div className="bg SignupForm">
        <form className="form-horizontal signup-form">
          <div className="form-group signup-form">
            <label htmlFor="firstName">First Name:</label>
            <div className="col col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="firstName"
                name="firstName"
                placeholder={this.props.firstName}
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group signup-form">
            <label htmlFor="lastName">Last Name:</label>
            <div className="col col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="lastName"
                name="lastName"
                placeholder={this.props.lastName}
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group signup-form">
            <label htmlFor="email">Email:</label>
            <div className="col col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                placeholder={this.props.email}
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group signup-form">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <div className="col col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder={this.props.phoneNumber ? this.props.phoneNumber : "Enter a Number!"}
                value={this.state.phoneNumber ? this.state.phoneNumber : ""}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group signup-form ">
            <div className="col-7" />

            <button
              className="btn click"
              onClick={this.handleSubmit}
              type="submit"
            >
              Update Info
            </button>
          </div>
          {/* <div className="likedBars" >
            <h3> Liked Bars </h3>
            {this.props.likedBars.map(element => {
              return   <li> {element} </li>
            })}
          </div> */}
          {/* <div className="myFriends">
            <h3> My Friends </h3>
            {this.props.friendsArray.map(element => {
              return   (<div> 
                              <li> Name: {element.firstName} {element.lastName} </li>
                              <li> Their Liked Bars: {element.likedArray}</li> 
                        </div>)
            })}
          </div> */}
          
        </form>
      </div>
      </div>
    );
  }
}

export default Profile;
