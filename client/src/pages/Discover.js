import React, { Component } from "react";
import Card from "../components/Card";
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
    if (event.target.getAttribute("data-value") === "like") {
      //user.likedArray.push(this.state.bars[this.state.count].name);
      API.likeBar(this.state.bars[this.state.count].name);
      this.setState({ count: this.state.count + 1 });
    } else if (event.target.getAttribute("data-value") === "dislike") {
      API.dislikeBar(this.state.bars[this.state.count].name);
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return (
      <div className="discover">
        <Card
          {...this.state.bars[this.state.count]}
          handleBtnClick={this.handleBtnClick}
        />
      </div>
    );
  }
}

export default Discover;
