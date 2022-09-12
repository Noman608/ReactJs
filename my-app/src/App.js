import React, { Component } from 'react'
import "./App.css"
import User from './User'
export default class App extends Component {
  render() {
    let style = false;
    return (
      <div>
        <h1 className='txtb textS'>Hello App</h1>
        <User color={style?"txtb":"txtg"}/>
      </div>
    )
  }
}
