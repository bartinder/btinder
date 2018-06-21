import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import "./login-form.css";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstName:"",
            lastName: "",
            errorMessage: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                email: this.state.email,
                password: this.state.password
                // firstName: this.state.firstName,
                // lastName: this.state.lastname
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/discover'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                this.setState({errorMessage: "There Was a Problem Logging In, Please Try Again!"})
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
              <div className="bg justify-content">
                <div>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-ml-auto">
                                <label className="form-label" htmlFor="username"></label>
                            </div>
                            <div className="col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-ml-auto">
                                <label className="form-label" htmlFor="password"></label>
                            </div>
                            <div className="col-mr-auto">
                                <input className="form-input"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className=""></div>
                            <button
                                className="btn-login col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                        <div>
                            {this.state.errorMessage}
                        </div>
                    </form>
                </div>
                <Link to="/signup">
                    <span className="signup">Don't have an account? Sign Up</span>
                </Link>
              </div>
            )
        }
    }
}

export default LoginForm
