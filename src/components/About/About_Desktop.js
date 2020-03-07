import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';

import { styles } from './About.styles';
import { body_1, body_2, body_3, body_4 } from './text.js';

export default class About_Desktop extends Component {
  render() {
    return (
      <Paper style={styles.main}>
        <div style={styles.container}>
        <div style={styles.title}>About Us</div>
          <div style={styles.text}>{body_1}</div>
          <div style={styles.text}>{body_2}</div>
          <div style={styles.text}>{body_3}</div>
          <div style={styles.text}>{body_4}</div>
        </div>
      </Paper>
    );
  }
}
