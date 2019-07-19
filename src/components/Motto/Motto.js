import React, { Component } from "react";
import { BrowserView } from "react-device-detect";

import { styles } from './Motto.styles';

class Motto extends Component {
  render() {
    return (
      <BrowserView>
        <div style={styles.mottoContainer}>
          <h1 style={styles.welcome}>Welcome to Ever Pretty Beauty and Training Studio</h1>
        </div>
      </BrowserView>
    )
  }
}

export default Motto;
