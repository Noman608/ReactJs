import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived Sate From props");
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      return true;
    }
    return false;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate ...... runs befor update");
    console.log(prevProps,prevState);
    return 45;
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("componentDidUpdate --------runs after update");
  }
  render() {
    return (
      <div>
        <h1>Marks : {this.state.mroll}</h1>
      </div>
    );
  }
}
