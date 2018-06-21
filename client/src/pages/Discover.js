import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Footer from "../components/Footer"

class Discover extends Component {
  state = {

  }
  
  componentWillMount() {
  // window.location.reload();
  };

  render() {
    return (
      <div>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick}>
          
        </Card>

        <Footer/>
        
      </div>
    );
  }
}

export default Discover;
