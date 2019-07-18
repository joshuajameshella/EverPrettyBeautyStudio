import React, { Component } from "react";
import Slideshow from './Slideshow/Slideshow.js';
import Motto from '../Motto/Motto.js';

import { styles } from './Slider.styles.js';

const slides = [
  require('../../images/1.png'),
  require('../../images/3.jpeg'),
  require('../../images/4.jpeg'),
  require('../../images/5.jpeg'),
];


class Slider extends Component {
  render() {
    return (
      <div style={styles.slideshow}>
        <Motto />
      	<Slideshow
      		showIndex
      		showArrows
      		autoplay
      		defaultIndex={1}
      		effect={'fade'}
      		slideInterval={4000}
      		slides={slides}
      		height={'100%'}
      		width={'100%'}>
      	</Slideshow>
      </div>
    )
  }
}

export default Slider;
