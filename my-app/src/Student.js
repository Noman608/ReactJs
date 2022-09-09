import React, { Component } from "react";
import Marks from "./Marks";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      roll: 101 ,
    };
  }
  clickHandle = () => {
    console.log("Button Clicked!");
    this.setState({ roll: this.state.roll+2 });
  };
  render() {
    return (
      <div>
        <h1>Student : {this.state.roll}</h1>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandle}> Change </button>
      </div>
    );
  }
}
