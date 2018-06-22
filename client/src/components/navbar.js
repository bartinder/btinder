import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { Route, Link, browserHistory } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import ProfilePicture from "./ProfilePicture/ProfilePicture";

class Navbar extends Component {
    constructor(props) {
        super()
        this.logout = this.logout.bind(this)
    }
    
    // componentDidMount() {
    //     this.getUser();
    // }

    // getUser() {
    //     axios.get("/user")
    // }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              email: null
            })
          }
          window.location.assign("/login");

        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        const style = {
            color: "white"
        }
        
        return (
            <div>
                        
                <header className="navbar App-header" id="nav-container">
                        
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">

                                <Link to="/friends" className="btn btn-link" >
                                    <span className="" style={style}>Friends</span>
                                    </Link>

                                <Link to="/discover" className="btn btn-link text-secondary">
                                    <span className="" style={style}>Discover</span>
                                    </Link>

                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="" style={style}>Logout</span>
                                    </Link>
                                <div className="profilePicture">
                                    <div>
                                        {this.props.firstName} {this.props.lastName}
                                    </div>
                                    <ProfilePicture src={this.props.src}/>
                                </div>
                                
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="" style={style}>Home</span>
                                        </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="" style={style} >Login</span>
				                        </Link>
                                    <Link to="/signup" className="btn btn-link">
                                    <span className="" style = {style}>Sign Up</span>
				                        </Link>
                                </section>
                            )}
                    </div>
                    <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={require("../pictures/logo6.png")} className="App-logo" alt="logo" />
                        <h1 className="App-title">barTinder</h1>
                        
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar