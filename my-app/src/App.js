import React, { Component } from 'react'
import Noman from './Noman'
import Sunam from './Sunam'

export default class App extends Component {
  render() {
    return (
      <div>
        <Noman camp={120}/>
        <Sunam camp={170}/>
      </div>
    )
  }
}
