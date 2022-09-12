import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name:"XXX",
    password:1234,
  }
  handleChnage = (e)=>{
       this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <>
        <form>
        <br />
          <label>
            Name: <input type="text" name='name' value={this.state.name}  onChange={this.handleChnage} />
          </label>
          <br /> <br />
          <label>
            Password: <input type="text" name='password' value={this.state.password} onChange={this.handleChnage}/>
          </label>
        </form>
      </>
    )
  }
}
