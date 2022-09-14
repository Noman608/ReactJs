import React, { Component } from "react";
import Army from "./withArm";
class Sunam extends Component {
  render() {
    return (
      <div>
      <h1> Camp : {this.props.camp}</h1>
        <h3 onMouseOver={this.props.HGS}>
          Sunam {this.props.G} Gunshots : {this.props.GS}
        </h3>
      </div>
    );
  }
}
export default Army(Sunam,20);
