import React, { Component } from "react";
import SearchBar from "./SearchBar";
// import FilterBar from "./FilterBar";
class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div>
        <SearchBar handleUpdate={this.props.handleUpdate} />
        {/* <FilterBar /> */}
      </div>
    );
  }
}

export default SearchBox;
