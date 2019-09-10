import React, { Component } from "react";
import IndividualList from "./IndividualListItems";

class BookItem extends Component {
  static defaultProps = {
    items: []
  };

  render() {
    const list = this.props.items.map((data, key) => (
      <IndividualList
        img={data.volumeInfo.imageLinks.smallThumbnail}
        bookName={data.volumeInfo.title}
        key={key}
        author={data.volumeInfo.authors}
        buyLink={`${data.saleInfo.buyLink}`}
        desc={data.volumeInfo.description}
      />
    ));

    return (
      <div className="BookItem">
        <div>{list}</div>
      </div>
    );
  }
}

export default BookItem;
