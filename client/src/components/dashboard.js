import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import App from '../App'

class Dashboard extends Component {
    constructor() {
    super()
    this.state = {
        loggedIn: false,
        email: "",
        id: null,
        firstName: "",
        lastName: "",
        redirectTo: null,
        responseReturned: false
    }

    this.getUser = this.getUser.bind(this)
    }

    componentWillMount() {
        this.getUser();
    }
    

    getUser() {
        axios.get('/user/', function(req,res) {
            console.log("is this working?");
          }).then(response => {
          console.log('Get user response: ');
          console.log(response.data);
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session ');
    
            this.setState({
              loggedIn: true,
              email: response.data.user.email,
              id: response.data.user._id,
              firstName: response.data.user.firstName,
              lastName: response.data.user.lastName,
              responseReturned: true
            });
            console.log(this.state);
            
          } else {
            console.log('Get user: no user');
            // this.setState({
            //   loggedIn: false,
            //   email: null
            // })
          }
        })
      }
    

        
    


    render() {
        const fontStyles = {
            fontSize: 100
        }
        if (this.state.responseReturned && !this.state.loggedIn) {
            // return <Redirect to={{ pathname: "/login"}} />
            return (
            <div>
                <p style= {fontStyles}> Please Login! </p>
                <form action="login" method="get">
                    <button className="btn btn-primary col-1 col-mr-auto">Login</button>
                </form>
            </div>
            )
        }
        else if (!this.state.loggedIn) {
            return (
            <div>
                <p style= {fontStyles}> Please Login! </p>
                <form action="/login" method="get">
                    <button className="btn btn-primary col-1 col-mr-auto">Login</button>
                </form>
            </div>
            )
        }
        
        return (
            <div>
                <p>
                    Dashboard Page
                </p>
                <div className = "userInfo">
                <ul>
                    <li> First Name: {this.state.firstName} </li>
                     <li> Last Name: {this.state.lastName} </li>
                     <li> Email: {this.state.email} </li>
                     <li> Liked Bars: </li>
                     <li> Disliked Bars: </li>
                </ul>
                </div>
            </div>
        )
        
    }
}

export default Dashboard