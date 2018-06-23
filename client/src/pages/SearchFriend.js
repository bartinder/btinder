import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Container from "../components/Container";
import Friend from "./Friend";

class SearchFriend extends Component {

  state = {
    search: "",
    users: [],
    error: ""
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "100%" }}>
          <h1 className="text-center">Search</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Friend />
        </Container>
      </div>
    );
  }
}
  

export default SearchFriend;

