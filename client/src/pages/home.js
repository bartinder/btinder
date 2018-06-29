import React, { Component } from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            redirectTo: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(props) {
        
        if (this.props.loggedIn) {
        this.setState({redirectTo: "/discover"})
        } else {this.setState({redirectTo: "/login"})}
    //    console.log(props.loggedIn)
        
    }


    render() {

        const loggedIn = this.props.loggedIn
        console.log(loggedIn);
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {

        if (loggedIn) {
        return (
            <div className="wrapper justify-content">
              <div className="bg">
                <div>
                  <Link to="/discover">
                    <button
                    type= "submit"
                    className="btn col-mr-auto"
                    onClick={this.handleSubmit}
                    >
                    Click to Begin!
                    </button> 
                  </Link>
                </div>
              </div>

            </div>
               )}
            else {
                return (
                    <div className="wrapper justify-content">
                      <div className="bg">
                        <div>
                          <Link to="/login">
                            <button
                            type= "submit"
                            className="btn col-mr-auto home"
                            onClick={this.handleSubmit}
                            >
                            Click to Begin!
                            </button> 
                          </Link>
                        </div>
                      </div>
        
                    </div>
                       )
    }
  }
}


export default Home;
