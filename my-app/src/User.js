import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <li>{this.props.value} + {this.props.key}</li>
    )
  }
}
