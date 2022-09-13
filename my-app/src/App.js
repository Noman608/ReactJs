import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class App extends Component {
  state = {
    name:"Hello Noman",
    value:10,
  }
  render() {
    return (
      <div>
        <User num={this.state.value} />
        <Guest number={this.state.value}/>
      </div>
    )
  }
}
