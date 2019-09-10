import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdate(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Harry Potter"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
