import React, { Component } from "react";
import Slideshow from '../components/Slider/Slider.js'
import Header from '../components/Header.js';

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '70vh',
    backgroundColor: 'rgb(255, 255, 255)',
  },

  slideshow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};


class Home extends Component {
  render() {
    return (
      <div style={styles.main}>
        <Header />
        <div style={styles.slideshow}>
          <Slideshow />
        </div>
      </div>
    )
  }
}

export default Home;
