import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="friend"
        type="text"
        className="form-control"
        placeholder="Search for Friends"
        id="friend"
        
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-secondary"
      >
      <span className="fas fa-search"></span>
      </button>
    </div>
  </form>
);

export default SearchForm;
