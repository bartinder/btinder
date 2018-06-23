import React, { Component } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      profilePicture: null
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount() {
    // this.handleBtnCLick()
    API.getBars()
      .then(res =>
        this.setState({
          bars: res
        })
      )
      .catch(err => console.log(err));
  }

  handleBtnClick(event) {
    console.log(
      "data-value of button: ",
      event.target.getAttribute("data-value")
    );
    if (event.target.getAttribute("data-value") === "like") {
      // push JSON object into liked array?
    } else if (event.target.getAttribute("data-value") === "dislike") {
      // push JSON object into disliked array?
    } else {
      // We are just skipping, need to render the next bar
    }
    console.log(this.props);
  }

  render() {
    return (
      <div className="discover">
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Discover;
