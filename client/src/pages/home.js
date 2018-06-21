import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "./Home.css"
// import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            redirectTo: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.setState({redirectTo: "/login"})
    }


    render() {
        const imageStyle = {
            width: 400
        }
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div className="wrapper justify-content">
              <div className="bg">
                <div>
                    <button
                    type= "submit"
                    className="btn col-mr-auto"
                    onClick={this.handleSubmit}
                    >
                    Click to Begin!
                    </button> 
                </div>
              </div>

            </div>
        )
    }
    }
}

export default Home
