import { Component } from "react";
import React from "react";

// let el = <h1>Hello NoShow</h1>;        JSX
// let el = React.createElement('h1',null,"Hello NoSite Show!!");

class App extends Component {
  render() {
    
    return(
      //React.createElement("h1", null, "Hello From the App Component!!");   /**javscript**/
      <React.Fragment>
        <h1>Hello</h1>
        <h2>Noman</h2>
      </React.Fragment>
    )
  }
}

export default App;
