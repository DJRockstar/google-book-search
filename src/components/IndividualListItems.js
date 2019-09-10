import React, { Component } from "react";

class IndividualList extends Component {
  static defaultProps = {
    price: ""
  };
  render() {
    return (
      <li
        style={{
          listStyle: "none",
          border: "1px solid #888",
          margin: "10px 10px",
          padding: "10px 10px"
        }}
      >
        <img src={this.props.img} alt="" />
        <p>
          <strong>Book Name: </strong> {this.props.bookName}
        </p>
        <p>
          <strong>Author: </strong> {this.props.author}
        </p>
        <a href={this.props.buyLink} style={{ backgroundColor: "#aaa" }}>
          Click here to Buy
        </a>
        <p style={{ width: "80%", margin: "auto" }}>
          <strong>Description: </strong>
          {this.props.desc}
        </p>
      </li>
    );
  }
}

export default IndividualList;
