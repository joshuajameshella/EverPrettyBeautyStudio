import React, { Component } from "react";
import Slideshow from './Slideshow/Slideshow.js';

const slides = [
  require('../../images/1.png'),
  require('../../images/3.jpeg'),
  require('../../images/4.jpeg'),
  require('../../images/5.jpeg'),
];


class Slider extends Component {
  render() {
    return (
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
    )
  }
}

export default Slider;
