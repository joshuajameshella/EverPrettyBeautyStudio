import React, { Component } from "react";

import PhotoGrid from '../components/reviews.js';

import { styles } from './styles/Reviews.styles';


class Reviews extends Component {

  render() {
    return (

      <div style={styles.main}>
        <div style={{ width: '80vw', marginLeft: '10vw', marginTop: 50 }}>
          <PhotoGrid />
        </div>
      </div>

    )
  }
}

export default Reviews;
