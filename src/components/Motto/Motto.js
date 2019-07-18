import React, { Component } from "react";
import { BrowserView } from "react-device-detect";

import { styles } from './Motto.styles';

class Motto extends Component {
  render() {
    return (
      <BrowserView>
        <div style={styles.mottoContainer}>
          <h1 style={styles.motto}>Find your</h1>
          <h1 style={styles.pop}>unique</h1>
          <h1 style={styles.motto}>style</h1>
        </div>
      </BrowserView>
    )
  }
}

export default Motto;
