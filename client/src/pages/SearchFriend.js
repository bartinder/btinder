import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import Friend from "./Friend";
import API from "../utils/API";

class SearchFriend extends Component {

  state = {
    search: "",
    users: [],
    error: ""
  };

  componentDidMount() {
    // API.getUsers()
    // .then(res => {
    //   this.setState({ users: res.data})
    // })
    // .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchUser({ search: this.state.search })
    .then(res => {
     this.setState({users: res.data});
    })
    .catch(err => this.setState({ error: err.message }));
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
          <Friend users={this.state.users}/>

        </Container>
      </div>
    );
  }
}
  

export default SearchFriend;

