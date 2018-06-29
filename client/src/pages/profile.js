import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
   
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  getUser() {
    axios.get('api/users', function(req,res) {
      }).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
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

  }

  
    

  render() {

// if (this.state.loggedIn) {
    return (
    //     <div>
    //     {this.props.loggedIn ? (<div> I Am logged In </div>) : 
    //     ( <h1> PLEASE LOG IN </h1>)}

      
    //     <h1>Profile Page</h1>
    //     <div className="userInfo">
    //       <ul>
    //         <li> Logged In: {this.props.loggedIn && <span>True</span>} </li>
    //         <li> First Name: {this.props.firstName} </li>
    //         <li> Last Name: {this.props.lastName} </li>
    //         <li> Email: {this.props.email} </li>
    //         <li> Liked Bars: </li>
    //         <li> Disliked Bars: </li>
    //       </ul>
    //     </div>
    //   </div>


    <div className="bg SignupForm">
    {/* <h4>Sign Up</h4> */}
    <form className="form-horizontal signup-form">
        <div className="form-group signup-form">
            <div className="col col-mr-auto">
                <input className="form-input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={this.props.firstName}
                    value=""
                    onChange={this.handleChange}
                />
            </div>
        </div>
        <div className="form-group signup-form">
            <div className="col col-mr-auto">
                <input className="form-input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={this.props.lastName}
                    value=""
                    onChange={this.handleChange}
                />
            </div>
        </div>
        <div className="form-group signup-form">
            <div className="col col-mr-auto">
                <input className="form-input"
                    type="text"
                    id="email"
                    name="email"
                    placeholder={this.props.email}
                    value=""
                    onChange={this.handleChange}
                />
            </div>
        </div>
        {/* <div className="form-group signup-form">
            <div className="col col-mr-auto">
                <input className="form-input"
                    placeholder={}
                    type="password"
                    name="password"
                    value={}
                    onChange={}
                />
            </div>
        </div> */}
        {/* <div className="form-group signup-form">
            <div className="col col-mr-auto">
                <input className="form-input"
                    placeholder="Age"
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
            </div>
        </div> */}
        {/* <div className="form-group signup-form">
            {!this.state.profilePicture ? (
            
            <div className="col col-mr-auto" style={{marginRight: 0}}>
                <input className="form-input"
                    placeholder="Picture"
                    type="file"
                    name="avatar"
                    value= ""
                    accept="image/png, image/jpeg"
                    onChange={this.handleChange}
                />
            </div>
            ) : (
            <div className="col col-mr-auto">
                <input className="form-input"
                    placeholder="Facebook Image Chosen!"
                    type="text"
                    name="avatar"
                    value= ""
                    accept="image/png, image/jpeg"
                />
            </div>
            )}

        
        {!this.state.profilePicture && (
    <div className="form-group signup-form">  
        <div className="facebook">
            <FacebookLoginWithButton
                appId="2035101990142770"
                autoLoad={true}
                fields="name,email,picture,first_name,last_name"
                callback={this.responseFacebook}
                icon="fa-facebook"
                render={renderProps => (
                <button onClick={renderProps.onClick}></button>
                )}
                scope="user_friends, user_location"
                show_faces={true}
                size="large"
                buttonStyle= {buttonStyle}
                onMouseEnter={this.mouseEnter}
            />
        </div>
    </div>
        )}
        </div> */}
        <div className="form-group signup-form ">
            <div className="col-7"></div>
            {/* {this.state.profilePicture && (<img src= {this.state.profilePicture} style={imageStyle}/>)} */}
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
// }

  }
}

export default Profile