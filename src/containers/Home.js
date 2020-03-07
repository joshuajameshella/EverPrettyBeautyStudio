import React, { Component } from "react";

import Slideshow from '../components/Slider/Slider.js'
import Header from '../components/Header/Header.js';

import About from './About.js';
import Treatments from './Treatments.js';
import Contact from './Contact.js';

import { styles } from './styles/Home.styles';

const slides = [
  require('../images/1.png'),
  require('../images/2.png'),
  require('../images/3.png'),
  require('../images/4.png'),
];


class Home extends Component {
  render() {
    return (

      <div style={styles.main}>

        <div id="/">
          <Header />
        </div>

        <Slideshow images={slides} />

        <div id="about" style={styles.aboutContainer}>
          <About />
        </div>

        <div id="treatments" style={styles.treatmentContainer}>
          <Treatments />
        </div>

        <div id="contact" style={styles.contactContainer}>
          <Contact />
        </div>

      </div>

    )
  }
}

export default Home;
