import React, { Component } from "react";

import Slideshow from '../components/Slider/Slider.js'
import Header from '../components/Header/Header.js';
import Info from '../components/Info/Info.js';

import Treatments from './Treatments.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';

import { styles } from './styles/Home.styles';

const slides = [
  require('../images/1.png'),
  require('../images/3.jpeg'),
  require('../images/4.jpeg'),
  require('../images/5.jpeg'),
];

const slideshowWeb = {
  position: 'relative',
  width: '100vw',
  marginTop: 140,
  height: '85vh',
  opacity: 0.90,
};

class Home extends Component {
  render() {
    return (

      <div style={styles.main}>

        <div id="/">
          <Header />
        </div>

        <Slideshow images={slides} motto={true} height={'100%'} width={'100%'} style={slideshowWeb} />

        <div id="about" style={styles.aboutContainer}>
          <Info />
        </div>

        <div id="treatments" style={styles.treatmentContainer}>
          <Treatments />
        </div>

        <div id="gallery" style={styles.galleryContainer}>
          <Gallery />
        </div>

        <div id="contact" style={styles.contactContainer}>
          <Contact />
        </div>

      </div>

    )
  }
}

export default Home;
