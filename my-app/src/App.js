import React, { Component } from 'react'
import styles from "./App.module.css";
import User from './User'
export default class App extends Component {
  render() {
    let style = false;
    return (
      <div>
        <h1 className={`${styles.textS} ${styles.txtg}`}>Hello App</h1>
        <User color={style?"txtb":"txtg"}/>
      </div>
    )
  }
}
