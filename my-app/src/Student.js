import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h1>Your Roll :{this.props.roll}</h1>
      </>
    );
  }
}
export default Student;
