import React, { Component } from "react";
import { MyContext } from "./Context";
//import { Consumer } from "./Context";

export default class Guest extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div>
        <h3>Guest Component</h3>

        <h4>
                Name: {this.context.data.name} Value: {this.context.data.value}
              </h4>
              <button onClick={this.context.handleClick}>Change Value</button>

      

        {/* <Consumer>
          {({ data, handleClick }) => (
            <div>
              <h4>
                Name: {data.name} Value: {data.value}
              </h4>
              <button onClick={handleClick}>Change Value</button>
            </div>
          )}
        </Consumer> */}
      </div>
    );
  }
}
