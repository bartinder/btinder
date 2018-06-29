import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import Friend from "./Friend";
import API from "../utils/API";

class SearchFriend extends Component {

  state = {
    search: "",
    users: [],
    error: "",
    friend: []
  };

  componentDidMount() {
    this.setState({users: this.props.friendsArray, friend: this.props.friendsArray})

  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      !this.state.search.trim().length
    ) {
      this.setState({users: []});
    return;
    }
    API.searchUser({ search: this.state.search })
    .then(res => {
     this.setState({users: res.data});
    })
    .catch(err => this.setState({ error: err.message }));
};

  handleAddFriend(id) {
    console.log("handling");
        console.log(id);
    API.addFriend(id);


  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "100%" }}>
          <h1 className="text-center"></h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Friend users={this.state.users}
          friends={this.props.friendsArray}
          handleAddFriend={this.handleAddFriend}/>

        </Container>
      </div>
    );
  }
}
  

export default SearchFriend;

