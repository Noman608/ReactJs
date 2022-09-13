import React, { Component } from "react";
import User from "./User";
import { Provider } from "./Context";
export default class App extends Component {
  state = {
    name: "Noman",
    value: 10,
  };
   handleClickNext = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.handleClickNext,
    };
    return (
      <div>
        <h3>App Component</h3>
        <Provider value={contextValue}>
          <User />
        </Provider>
      </div>
    );
  }
}
