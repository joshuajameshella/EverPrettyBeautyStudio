import React, { Component } from "react";

import Slideshow from '../components/Slider/Slider.js'
import Header from '../components/Header/Header.js';
import Info from '../components/Info/Info.js';

import Treatments from './Treatments.js';
import Reviews from './Reviews.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';

import { styles } from './styles/Home.styles';



class Home extends Component {
  render() {
    return (

      <div style={styles.main}>

        <div id="/">
          <Header />
        </div>

        <Slideshow />

        <Info />

        <div id="treatments" style={styles.treatmentContainer}>
          <Treatments />
        </div>

        <div id="reviews" style={styles.reviewsContainer}>
          <Reviews />
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
