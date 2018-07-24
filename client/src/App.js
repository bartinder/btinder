import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
      phoneNumber: "",
      id: null,
      friendsArray: "",
      likedBars: "",
      friendsFirstName: ""
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
          profilePicture: response.data.user.profilePicture,
          phoneNumber: response.data.user.phoneNumber,
          friendsArray: response.data.user.friendsArray,
          friendsFirstName: response.data.user.friendsArray.firstName,
          friendsLastName: response.data.user.friendsArray.LastName,
          likedBars: response.data.user.likedArray
        });
        // console.log("response.data.user.friendsArray.firstName", this.state.friendsFirstName)
        
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

        {this.state.loggedIn ? (
        <Route
          path="/profile"
          render = {() => 
            <Profile
              updateUser = {this.updateUser}
              loggedIn = {this.state.loggedIn}
              firstName = {this.state.firstName}
              lastName = {this.state.lastName}
              email = {this.state.email}
              phoneNumber = {this.state.phoneNumber}
              likedBars = {this.state.likedBars}
              friendsArray = {this.state.friendsArray}
              friendsFirstName = {this.state.friendsFirstName}
              friendsLastName = {this.state.friendsLastName}
          />}
        /> 
        ) : (
        <Route
          exact path="/profile"
          component={Home} 
        />
        )}

        {this.state.loggedIn? (
        <Route
          exact path="/friends"
          render = {() => 
            <SearchFriend
              loggedIn = {this.state.loggedIn}
              friendsArray = {this.state.friendsArray}
          />}
        />
        ) : (
        <Route
          exact path="/friends"
          component = {Home}
            
        />
        )}

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