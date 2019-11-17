import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { body_1, body_2 } from './text.js';
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
            <div style={styles.imageContainer}>
              <img style={styles.iconOne} src={require("../../images/about/flower1.png")} alt={"flower one"}></img>
              <img style={styles.iconTwo} src={require("../../images/about/flower2.png")} alt={"flower two"}></img>
            </div>
            <div style={styles.webInfo}>
              <div style={styles.webHeader}>About Us</div>

              <div style={styles.webText}>{body_1}</div>

              <div style={styles.webList}>Gel manicure using The Gel Bottle Inc system</div>
              <div style={styles.webList}>Footlogix pedicure system</div>
              <div style={styles.webList}>Spray Tans using Nouvatan products</div>
              <div style={styles.webList}>Manicure treatments</div>
              <div style={styles.webList}>Pedicure treatments</div>
              <div style={styles.webList}>We also specialise in Hollywood and Brazillian female intimate waxing</div>

              <div style={styles.webText}>{body_2}</div>
            </div>
          </BrowserView>

          <MobileView>
            <div style={mobilestyles.mobileInfo}>
              <div style={mobilestyles.mobileHeader}>About Us</div>

              <div style={mobilestyles.mobileText}>{body_1}</div>

              <div style={mobilestyles.mobileList}>Gel manicure using The Gel Bottle Inc system</div>
              <div style={mobilestyles.mobileList}>Footlogix pedicure system</div>
              <div style={mobilestyles.mobileList}>Spray Tans using Nouvatan products</div>
              <div style={mobilestyles.mobileList}>Manicure treatments</div>
              <div style={mobilestyles.mobileList}>Pedicure treatments</div>
              <div style={mobilestyles.mobileList}>We also specialise in Hollywood and Brazillian female intimate waxing</div>

              <div style={mobilestyles.mobileText}>{body_2}</div>
            </div>
          </MobileView>

      </div>
    )
  }
}

export default Info;
