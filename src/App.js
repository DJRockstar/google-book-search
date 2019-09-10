import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import BookList from "./components/BookList";

class App extends Component {
  state = {
    items: []
  };

  updateSearchTerm = term => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term.replace(/\s/g, "")}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        this.setState({
          items: data.items //this will return the array of all the items and will update the state
        });
      })
      .catch(err => console.log("See error message: ", err));
  };

  render() {
    return (
      <div className="App">
        <h1 className="heading">Google Book Search</h1>
        <SearchBox handleUpdate={term => this.updateSearchTerm(term)} />
        <BookList items={this.state.items} />
      </div>
    );
  }
}

export default App;
