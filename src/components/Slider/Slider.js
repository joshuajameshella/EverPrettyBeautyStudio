import React, { Component } from "react";
import PropTypes from 'prop-types';
import { BrowserView, MobileView } from "react-device-detect";
import Slideshow from './Slideshow/Slideshow.js';

import motto_image from '../../images/motto.png';
import { styles } from './Slider.styles.js';


class Slider extends Component {
  render() {
    return (
      <div>
        <BrowserView>
          <div style={this.props.style}>
            <Slideshow
              showIndex
              showArrows
              autoplay
              defaultIndex={1}
              effect={'fade'}
              slideInterval={4000}
              slides={this.props.images}
              height={this.props.height}
              width={this.props.width}>
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
              slides={this.props.images}
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

Slider.propTypes = {
  images: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  motto: PropTypes.bool,
  style: PropTypes.object
};
