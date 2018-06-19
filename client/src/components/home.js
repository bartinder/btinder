import React, { Component } from 'react'


class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Welcome To barTinder!</p>
                <img style={imageStyle} src={require("../pictures/barTinderLogo.png")} alt="main-logo"/>
            </div>
        )

    }
}

export default Home
