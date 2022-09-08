import React, { Component } from 'react'
class Student extends Component{

  constructor(props){
    super(props);
    this.state ={
      name: "Noman",
      roll:this.props.roll,
    }
  }
  handleClick = ()=>{
    this.setState({
      name:"Abdullah",
      roll:608
    })
    console.log("button Clicked",this);
  }
  render(){
    return(
      <>
        <h1>Hello NoShow</h1>
        <h2>Hello name is {this.state.name}, your Roll : {this.state.roll}</h2>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    )
  }
}
export default Student;