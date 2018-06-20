import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import Home from './components/home';
import Dashboard from "./components/dashboard";
import Discover from "./pages/Discover";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null,
      firstName: "",
      lastName: "",
      id: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  

  getUser() {
    axios.get('/user/', function(req,res) {
        console.log("is this working?");
      }).then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          email: response.data.user.email,
          id: response.data.user._id,
          firstName: response.data.user.firstName,
          lastName: response.data.user.lastName
        });
         
        
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          email: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
      <Wrapper>
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>You Are Currently Logged In, {this.state.firstName}  {this.state.lastName}!</p>
        }
        {/* Routes to different components */}

        <Route
          exact path="/"
          component={Home} 
        />
        
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              signup={this.signup}
            />}
        />
        <Route
          path="/dashboard"
          render = {() =>
            <Dashboard
            loggedIn = {this.props.loggedIn}
          />}
        />
        <Route
          path="/discover"
          component={Discover}
        />

        </Wrapper>
      </div>
    </Router>
    );
  }
}

export default App;
