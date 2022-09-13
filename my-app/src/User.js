import React, { Component } from 'react'

export default class User extends Component {

  render() {
    return (
      <div>
        <h2>User: {this.props.num + 10}</h2>
      </div>
    )
  }
}
