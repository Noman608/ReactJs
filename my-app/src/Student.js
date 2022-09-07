import React, { Component } from "react";
import PropTypes from 'prop-types'; 
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
Student.propTypes = {
     name:PropTypes.string.isRequired, 
     roll:PropTypes.number,
}
Student.defaultProps = {
    name:"NoShow",
}
export default Student;
