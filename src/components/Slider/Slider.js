import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
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
      <div>
        <BrowserView>
          <div style={styles.slideshowWeb}>
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
        </BrowserView>

        <MobileView>
          <div style={styles.slideshowMobile}>
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
        </MobileView>
      </div>



    )
  }
}

export default Slider;
