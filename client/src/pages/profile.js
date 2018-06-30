import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import "./profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
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
      phoneNumber: this.props.phoneNumber
    });
  }

  getUser() {
    axios.get("api/users", function(req, res) {}).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          id: response.data.user._id
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
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <h3 className="card-title" id="settings">
              Settings
            </h3>
          </div>
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
							  name="firstName"
                placeholder={this.props.firstName}
                value={this.state.firstName}
							  onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder={this.props.lastName}
                value={this.state.lastName}
							  onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder={this.props.email}
                value={this.state.email}
							  onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder={this.props.phoneNumber}
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button
              type="submit"
              id="update"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Update profile
            </button>
            {console.log("'Update profile' error: " + this.state.errorMessage)}
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
