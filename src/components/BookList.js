import React, { Component } from "react";
import BookItem from "./BookItem";

class BookList extends Component {
  render() {
    return (
      <div>
        <BookItem items={this.props.items} />
      </div>
    );
  }
}

export default BookList;
