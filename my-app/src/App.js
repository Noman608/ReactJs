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
    // let consumer;
    // if (isLoggedIn) {
    //   consumer =  <User clickData={this.clickLogOut}/>;
    // } else {
    //   consumer = <Guest clickData={this.clickLogin}/>;
    // }
    // return (
    //   <>
    //     {consumer}
    //   </>
    // )
    return(
      <>
        {isLoggedIn? <User clickData={this.clickLogOut}/>:<Guest clickData={this.clickLogin}/>}
      </>
    )
  }
}
