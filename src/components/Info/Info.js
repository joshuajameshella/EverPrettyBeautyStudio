import React, { Component } from "react";
import { Parallax } from 'react-scroll-parallax';
import { BrowserView, MobileView } from "react-device-detect";
import Button from '../Button';

import { header, body_1, body_2 } from './text.js';
import { styles } from './Info.styles';
import { mobilestyles } from './Info.mobilestyles';

import image_1 from '../../images/info_2.png';
import image_2 from '../../images/info_3.png';
import merge from '../../images/merge.png';


class Info extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      width: 0,
    });
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {

    return (
      <div>
          <BrowserView>
            <div style={styles.webInfo}>

              <div style={styles.paralax}>
                <img src={merge} alt="" style={styles.stationaryImage} />
                <Parallax x={['-15%', '5%']} tagOuter="figure">
                  <img src={image_1} alt="nails" style={styles.slidingImageLeft} />
                </Parallax>
                {this.state.width < 940 ? "" :
                  <Parallax x={['5%', '0%']} tagOuter="figure">
                    <img src={image_2} alt="nails" style={styles.slidingImageRight} />
                  </Parallax>
                }
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

                {this.state.width < 940 ? "" :
                  <div>
                    <div style={{ position: 'relative', float: 'left', width: '15vw', marginTop: '5vh', marginRight: '5vw', marginBottom: '5vh' }}>
                      <Button input={'VIEW ALL TREATMENTS'}/>
                    </div>
                    <div style={{ position: 'relative', float: 'left', width: '15vw', marginTop: '5vh', marginBottom: '5vh' }}>
                      <Button input={'BOOK AN APPOINTMENT'}/>
                    </div>
                  </div>
                }
                </div>
            </div>
          </BrowserView>

          <MobileView>
            <div style={mobilestyles.mobileInfo}>

              <div style={{ width: '90vw', margin: '5vw' }}>
                <img src={image_1} alt="nails" style={mobilestyles.image} />
                <div style={mobilestyles.infoHeader}>{header}</div>

                <div style={mobilestyles.infoText}>{body_1}</div>
                <div style={mobilestyles.infoText}>{body_2}</div>

                <div style={mobilestyles.infoTextTitle}>Our beauty treatments include:</div>
                <div style={mobilestyles.infoText}>
                  <li>  The Gel Bottle Inc, Gel Polish Nails</li>
                  <li>  The Gel Bottle Inc, Gel Nail Extensions</li>
                  <li>  Footlogix Pedicure</li>
                  <li>  Brazillian and Hollywood Female Intimate Waxing</li>
                  <li>  All other Waxing treatments</li>
                  <li>  Eyelash Tinting and Eyebrow Tinting</li>
                </div>

                <div style={{ position: 'relative', float: 'left', width: '35vw', margin: '5vw', paddingTop: '3vh' }}>
                  <Button input={'VIEW ALL TREATMENTS'}/>
                </div>
                <div style={{ position: 'relative', float: 'left', width: '35vw', margin: '5vw', paddingTop: '3vh' }}>
                  <Button input={'BOOK AN APPOINTMENT'}/>
                </div>

              </div>
            </div>
          </MobileView>

      </div>
    )
  }
}

export default Info;
