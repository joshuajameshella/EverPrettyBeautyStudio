import React, { Component } from "react";

import Slideshow from '../components/Slider/Slider.js'
import Header from '../components/Header/Header.js';

import { styles } from './styles/Home.styles';



class Home extends Component {
  render() {
    return (

      <div style={styles.main}>

          <div id="/">
            <Header />
          </div>

          <Slideshow />

          <div id="treatments" style={styles.treatmentContainer} />

      </div>

    )
  }
}

export default Home;
