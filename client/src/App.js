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
        lastName={this.state.lastName}/>
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn &&
          // <div style={{height: "10px", backgroundColor: ""}}>
          //   <p>
          //   </p>
          // </div>
        } */}
        {/* Routes to different components */}

        <Route
          exact path="/"
          component={Home} 
        />

        <Route
          exact path="/friends"
          render = {() => 
            <Home 
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
        <Route path="/search"
        component={SearchFriend}
        />
        </Wrapper>
      </div>
    </Router>
    );
  }
}

export default App;