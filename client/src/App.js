import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// components
import Signup from './pages/sign-up';
import LoginForm from './pages/login-form';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Dashboard from "./components/dashboard";
import Discover from "./pages/Discover";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SearchFriend from "./pages/SearchFriend";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/profile";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      email: null,
      firstName: "",
      lastName: "",
      proiflePicture: "",
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
    window.location.reload();
  }

  
  getUser() {
    axios.get('/api/users/current', function(req,res) {
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
          lastName: response.data.user.lastName,
          profilePicture: response.data.user.profilePicture
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
    const imageStyle = {
      height: "100px"
    }
    return (
      <Router>
      <div className="App">
      <Wrapper>
        
        <Navbar 
        updateUser={this.updateUser} 
        loggedIn={this.state.loggedIn} 
        src={this.state.profilePicture}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        />

        {this.state.loggedIn ? (
        <Route
          exact path="/"
          component={Discover} 
        />
        ) : (
        <Route
          exact path="/"
          component={Home} 
        />
        )}
        <Route
          path="/profile"
          render = {() => 
            <Profile
              updateUser = {this.updateUser}
              loggedIn = {this.state.loggedIn}
              firstName = {this.state.firstName}
              lastName = {this.state.lastName}
              email = {this.state.email}
          />}
        />

        <Route
          exact path="/friends"
          render = {() => 
            <SearchFriend
              loggedIn = {this.state.loggedIn}
          />}
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
        {this.state.loggedIn && (<Footer src={this.state.profilePicture} firstName={this.state.firstName} lastName={this.state.lastName} />)}
      </div>
    </Router>
    );
  }
}

export default App;