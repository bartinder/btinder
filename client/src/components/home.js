import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            redirectTo: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.setState({redirectTo: "/dashboard"})
    }


    render() {
        const imageStyle = {
            width: 400
        }
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div>
            <div>
                <p>Welcome To barTinder!</p>
                <img style={imageStyle} src={require("../pictures/barTinderLogo.png")} alt="main-logo"/>
            </div>
            <div>
                <button
                type= "submit"
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                >
                Click to Begin!
                </button>     
            </div>
            </div>
        )
    }
    }
}

export default Home
