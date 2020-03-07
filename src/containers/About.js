import React, { Component } from "react";
import AboutDesktop from '../components/About/About_Desktop';
import { styles } from './styles/About.styles';

export default class About extends Component {
  render() {
    return (
      <div style={styles.main}>
        <AboutDesktop />
      </div>
    )
  }
}
