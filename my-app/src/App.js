import React, { Component } from "react";

export default class App extends Component {
  state = {
    change: false,
  };
  clickHandel = ()=>{
    this.setState({change:true});
  }
  render() {
    const btnstyle = {
      color: "blue",
      backgroundColor: "orange",
    };
    
    if(this.state.change){
       btnstyle.backgroundColor = "White";
    }
    return (
      <>
        <button style={btnstyle} onClick={this.clickHandel} >Change</button>
      </>
    );

    
    // const txtc = {
    //   color: "blue",
    // };
    // const txts = {
    //   fontSize: "80px",
    // };
    // return (
    //   <div>
    //     <h1 style={{...txtc,...txts,...{fontFamily:"fantasy"}}}>Hello</h1>
    //   </div>
    // );

    // const btnstyle = {
    //   color:"blue",
    //   backgroundColor:"orange",
    // }
    // return (
    //   <div>
    //     <button style={btnstyle}>Button</button>
    //   </div>
    // )
  }
}
