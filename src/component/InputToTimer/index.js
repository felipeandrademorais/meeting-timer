import React, { Component } from "react";

export default class InputToTimer extends Component {
  render() {
    return <button onClick={this.setState({ openTime: true })}></button>;
  }
}
