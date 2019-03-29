import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search mx-auto">
    <div className="form-group mx-auto">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="friend"
        type="text"
        className="form-control"
        placeholder="Search Friends By Name or Bar"
        id="friend"
      />
      <button
        id="search"
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-secondary"
      >
        <span id="search" className="fas fa-search"></span>
      </button>
    </div>
  </form>
);

export default SearchForm;
