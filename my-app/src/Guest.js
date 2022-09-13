import React, { Component } from "react";
import { Consumer } from "./Context";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>
        <Consumer>
          {({data,handleClick})=>{
            return(
              <>
              <h4>Name:-{data.name}          Value:{data.value}</h4>
              <button onClick={handleClick}>Click for Value Change</button>
            </>
            )
          }}
        </Consumer>
      </div>
    );
  }
}
