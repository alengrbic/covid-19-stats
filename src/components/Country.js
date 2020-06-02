import React, { Component } from "react";

export class Country extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>{this.props.name}</h3>
        <h1 style={{ textAlign: "center" }}>{this.props.infected}</h1>
      </div>
    );
  }
}

export default Country;
