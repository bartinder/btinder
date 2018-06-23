import React, { Component } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";


class Discover extends Component {
  constructor() {
      super()
          this.state = {

          }

  this.handleBtnClick = this.handleBtnClick.bind(this)

  }
  
  componentDidMount() {
    // this.handleBtnCLick()
  };

  handleBtnClick(event) {
    console.log("data-value of button: ", event.target.getAttribute('data-value'));
    if (event.target.getAttribute("data-value") === "like") {
      // push JSON object into liked array?
    }
    else if (event.target.getAttribute("data-value") === "dislike") {
      // push JSON object into disliked array?
    }
    else {
      // We are just skipping, need to render the next bar 
    }
    
  }

  render() {
    return (
      <div className="discover">
          <Card image={this.state.image} handleBtnClick={this.handleBtnClick}>
          
          </Card>
          <Footer/>  
      </div>  
        

    );
  }
}

export default Discover;
