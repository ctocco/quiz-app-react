import React, { Component } from "react";

export class results extends Component {
  render() {
    console.log(this.props.results);

    return (
      <div>
        <h1 className="mt-5">Your results</h1>
      </div>
    );
  }
}

export default results;
