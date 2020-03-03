import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import ReactFitText from "react-fittext";

import { body_1, body_2, body_3, body_4 } from './text.js';
import { styles } from './Info.styles';
import { mobilestyles } from './Info.mobilestyles';


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

              <div style={styles.webHeader}>About Us</div>

              <ReactFitText compressor={6}>
                <div style={styles.webText}>{body_1}</div>
              </ReactFitText>
              <ReactFitText compressor={6}>
                <div style={styles.webText}>{body_2}</div>
              </ReactFitText>
              <ReactFitText compressor={6}>
                <div style={styles.webText}>{body_3}</div>
              </ReactFitText>
              <ReactFitText compressor={6}>
                <div style={styles.webText}>{body_4}</div>
              </ReactFitText>
            </div>
          </BrowserView>

          <MobileView>
            <div style={mobilestyles.mobileInfo}>
              <div style={mobilestyles.mobileHeader}>About Us</div>

              <ReactFitText compressor={3}>
                <div style={styles.webText}>{body_1}</div>
              </ReactFitText>
              <ReactFitText compressor={3}>
                <div style={styles.webText}>{body_2}</div>
              </ReactFitText>
              <ReactFitText compressor={3}>
                <div style={styles.webText}>{body_3}</div>
              </ReactFitText>
              <ReactFitText compressor={3}>
                <div style={styles.webText}>{body_4}</div>
              </ReactFitText>

            </div>
          </MobileView>

      </div>
    )
  }
}

export default Info;
