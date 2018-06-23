import React, { Component } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import API from "../utils/API";

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      profilePicture: null,
      bars: [],
      count: 0
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount() {
    // this.handleBtnCLick()
    API.getBars()
      .then(res =>
        this.setState({
          bars: res.data
        })
      )
      .catch(err => console.log(err));
  }

  handleBtnClick(event, i) {
    console.log(
      "data-value of button: ",
      event.target.getAttribute("data-value")
    );
    if (event.target.getAttribute("data-value") === "like") {
      //user.likedArray.push(this.state.bars[this.state.count].name);
      this.setState({ count: this.state.count + 1 });
    } else if (event.target.getAttribute("data-value") === "dislike") {
      //user.dislikedArray.push(this.state.bars[this.state.count].name);
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
    console.log(this.props);
  }

  render() {
    return (
      <div className="discover">
        <Card
          {...this.state.bars[this.state.count]}
          handleBtnClick={this.handleBtnClick}
        />
        <Footer />
      </div>
    );
  }
}

export default Discover;
