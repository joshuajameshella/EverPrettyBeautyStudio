import React, { Component } from "react";
import { Parallax } from 'react-scroll-parallax';
import Button from '../Button';

import { header, body_1, body_2 } from './text.js';
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

        <div style={styles.textHolder}>
          <div style={styles.infoHeader}>{header}</div>
          <div style={styles.infoText}>{body_1}</div>
          <div style={styles.infoText}>{body_2}</div>

          <div style={styles.infoTextTitle}>Our beauty treatments include:</div>
          <div style={styles.infoText}>
            <li>  The Gel Bottle Inc, Gel Polish Nails</li>
            <li>  The Gel Bottle Inc, Gel Nail Extensions</li>
            <li>  Footlogix Pedicure</li>
            <li>  Brazillian and Hollywood Female Intimate Waxing</li>
            <li>  All other Waxing treatments</li>
            <li>  Eyelash Tinting and Eyebrow Tinting</li>
          </div>

          <div style={{ position: 'relative', float: 'left', width: '15vw', marginTop: '7vh' }}>
            <Button input={'VIEW ALL TREATMENTS'}/>
          </div>
          <div style={{ position: 'relative', float: 'left', width: '15vw', marginTop: '7vh' }}>
            <Button input={'BOOK AN APPOINTMENT'}/>
          </div>
        </div>

      </div>
    )
  }
}

export default Info;
