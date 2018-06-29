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
      phoneNumber:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
      this.setState({   firstName: this.props.firstName,
                        lastName: this.props.lastName,
                        email: this.props.email,
                        phoneNumber: this.props.phoneNumber})
  }

  getUser() {
    axios.get('api/users', function(req,res) {
      }).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          id: response.data.user._id,
        });
      } 
    })
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    API.updateUser(this.state)
  }


  render() {

    return (

    <div className="bg SignupForm">
    
    <form className="form-horizontal signup-form">
        <div className="form-group signup-form">
        <label htmlFor="firstName">First Name:</label>
            <div className="col col-mr-auto">
                <input className="form-input"
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
                <input className="form-input"
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
                <input className="form-input"
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
                <input className="form-input"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder={this.props.phoneNumber}
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                />
            </div>
        </div>
        <div className="form-group signup-form ">
            <div className="col-7"></div>
        
            <button
                className="btn click"
                onClick={this.handleSubmit}
                type="submit"
            >Update Info</button>
        </div>
        <div style={{color:"black"}}>
        {this.state.errorMessage}
        </div>
    </form>
    </div>
    );

  }
}

export default Profile