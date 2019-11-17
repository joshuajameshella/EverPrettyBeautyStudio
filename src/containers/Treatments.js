import React, { Component } from "react";
import { styles } from './styles/Treatments.styles';
import { BrowserView, MobileView } from "react-device-detect";
import SwipableMenu from '../components/SwipableMenu';


class Treatments extends Component {
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.treatmentsHolder}>

          <BrowserView>

          </BrowserView>

          <MobileView>
            <SwipableMenu />
          </MobileView>

        </div>
      </div>
    )
  }
}

export default Treatments;
