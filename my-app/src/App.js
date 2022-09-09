import React, { Component } from "react";
import Student from "./Student.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - constructor Called!");
    console.log(props);
    this.state = {
      roll: "118cs0608",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App - getDrivedStateFromProps Called!");
    console.log(props, state);
    return null;
  }
  componentDidMount() {
    //get data from server and set the data in state 
    //AJAX call 
    //API call
    console.log("App - componentDidMount Called!");
  }
  render() {
    console.log("App - rendere App Called!");
    return (
      <div>
        <Student name="Rahul" />
      </div>
    );
  }
}
