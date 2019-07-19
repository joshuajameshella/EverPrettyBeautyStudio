import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Slideshow from './Slideshow/Slideshow.js';

import motto_image from '../../images/motto.png';
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
      <div>
        <BrowserView>
          <div style={styles.slideshowWeb}>
            <img src={motto_image} alt={"Ever Pretty Beauty Studio"} style={{ width: '50vw', position: 'absolute', zIndex: 30, left: '25vw', top: '40vh' }} />
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
        </BrowserView>

        <MobileView>
          <div style={styles.slideshowMobile}>
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
        </MobileView>
      </div>



    )
  }
}

export default Slider;
