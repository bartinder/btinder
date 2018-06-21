import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Route, Link, browserHistory } from 'react-router-dom';

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
        const imageStyle = {
            width: 500,
            height: 150
        }
        const buttonStyle = {
            height: 40
        }
        const loggedIn = this.props.loggedIn
        console.log(loggedIn);
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {

        if (loggedIn) {
        return (
        <div>
            <div>
                <p>Welcome To barTinder Freinds Page!</p>
                <img style={imageStyle} src={require("../pictures/barTinderLogo.png")} alt="main-logo"/>
            </div>
            <div>
                <Link to="/discover">
                    <button
                    style= {buttonStyle}
                    className = "btn btn-primary col-1 col-mr-auto"
                    > Click Here!
                    </button>
                </Link>
            </div>
        </div>
        )} else
        return (
            <div>
            <div>
                <p>Welcome To barTinder Freinds Page!</p>
                <img style={imageStyle} src={require("../pictures/barTinderLogo.png")} alt="main-logo"/>
            </div>
            <div>
                <Link to="/login">
                    <button
                    style= {buttonStyle}
                    className = "btn btn-primary col-1 col-mr-auto"
                    > Click Here!
                    </button>
                </Link>
            </div>
        </div>
        )
    }
}


export default Home
