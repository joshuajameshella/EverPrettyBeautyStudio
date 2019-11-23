import React, { Component } from "react";
import { styles } from './styles/Treatments.styles';
import { BrowserView, MobileView } from "react-device-detect";
import InstaGridDesktop from '../components/instagram/InstaGridDesktop';
import InstaGridMobile from '../components/instagram/InstaGridMobile';

class Gallery extends Component {

  render() {
    return (
      <div style={styles.main}>
        <div style={{ width: '80vw', marginLeft: '10vw', marginTop: 50 }}>
          <BrowserView>
            <InstaGridDesktop account="everprettybeautystudio" numberOfMediaElements={8} />
          </BrowserView>
          <MobileView>
            <div style={{ marginTop: -20 }}>
              <InstaGridMobile account="everprettybeautystudio" numberOfMediaElements={8} />
            </div>
          </MobileView>
        </div>
      </div>
    )
  }
}

export default Gallery;
