import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../App.css';
import axios from 'axios';
import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/users/logout').then(response => {
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
    
    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-s12 col-12">
            
            <div id="top-filler"></div>
            <img src={require("../pictures/logo4.png")} className="App-logo" alt="logo" />
            
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="/discover" className="btn btn-link text-secondary">
                  <span className="text-secondary"></span>
                </Link>
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary"></span>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary"></span>
                </Link>
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary"></span>
                </Link>
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary"></span>
                </Link>
              </section>
            )}

          </div>
        </header>
      </div>
    );
  }
}

export default Navbar
