import React, { Component } from 'react'
import pic from "./disha.jpg"
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <img src={process.env.PUBLIC_URL+"/img/disha.jpg"} alt="Mypic" /> */}
        <img src={pic} alt="Mypic"/>
      </div>
    )
  }
}
