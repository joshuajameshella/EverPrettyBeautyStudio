import React, { Component } from "react";
import { Parallax } from 'react-scroll-parallax';

import { styles } from './Info.styles';

import image_1 from '../../images/info_2.png';
import image_2 from '../../images/info_3.png';
import merge from '../../images/merge.png';


class Info extends Component {


  render() {

    return (
      <div style={styles.webInfo}>

        <div style={styles.paralax}>

          <img src={merge} alt="" style={styles.stationaryImage} />

          <Parallax x={['-15%', '5%']} tagOuter="figure">
            <img src={image_1} alt="nails" style={styles.slidingImageLeft} />
          </Parallax>

          <Parallax x={['5%', '0%']} tagOuter="figure">
            <img src={image_2} alt="nails" style={styles.slidingImageRight} />
          </Parallax>

        </div>

      </div>
    )
  }
}

export default Info;
