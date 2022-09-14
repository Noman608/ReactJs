import React, { Component } from "react";
const Army = (Men,shot) => {
  class NewMan extends Component {
    state = {
      gunshots: 0,
    };
    handleGunshots = () => {
      this.setState({ gunshots: this.state.gunshots + shot });
    };
    render() {
      return (
        <>
          <Men
            G="AK 76"
            GS={this.state.gunshots}
            HGS={this.handleGunshots}
            {...this.props}
          />
        </>
      );
    }
  }
  return NewMan;
};
export default Army;
