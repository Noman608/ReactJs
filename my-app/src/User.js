import React, { Component } from 'react'

export default class User extends Component {
  render() {
    
    return (
      <div>
        <h2 className={this.props.color}>Hello Users</h2>
      </div>
    )
  }
}
