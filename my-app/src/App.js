import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name:"XXX",
    password:1234,
  }
  handleChnagename = (e)=>{
    this.setState({name:e.target.value})
  }
  handleChnagePass = (e)=>{
    this.setState({password:e.target.value})
  }
  render() {
    return (
      <>
        <form>
        <br />
          <label>
            Name: <input type="text" value={this.state.name}  onChange={this.handleChnagename} />
          </label>
          <br /> <br />
          <label>
            Password: <input type="text" value={this.state.password} onChange={this.handleChnagePass}/>
          </label>
        </form>
      </>
    )
  }
}
