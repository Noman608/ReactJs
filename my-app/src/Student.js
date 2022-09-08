import React, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Noman",
      roll: this.props.roll,
    };
  }
  render() {
    return (
      <h1>
        Hello {this.state.name} Your Roll number : {this.state.roll}
      </h1>
    );
  }
}

export default Student;
