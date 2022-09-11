import React, { Component } from "react";
import User from "./User.js";
import Guest from "./Guest.js";
export default class App extends Component {
  state = {
    isLoggedIn: false,
  };
  clickLogin = ()=>{
    this.setState({isLoggedIn:true})
  }
  clickLogOut = ()=>{
    this.setState({isLoggedIn:false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <User clickData={this.clickLogOut}/>;
    } else {
      return <Guest clickData={this.clickLogin}/>;
    }
  }
}
