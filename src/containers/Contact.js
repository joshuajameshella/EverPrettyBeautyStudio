import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import MapBox from '../components/Map/MapBox';
import { styles } from './styles/Contact.styles';
import ContactTabs from '../components/ContactLayout/ContactTabs';

class Contact extends Component {
  render() {
    return (
      <div style={styles.main}>
        <BrowserView>
          <div style={styles.mapContainer}>
            <MapBox />
          </div>

          <div style={styles.infoContainer}>

            <div style={styles.infoHolder}>
                <div style={styles.text}>Opening Times</div>
                <div style={styles.openingTimesHolder}>
                  <div style={styles.dataLeft}>MON</div><div style={styles.dataRight}>10am to 5pm</div>
                  <div style={styles.dataLeft}>TUE</div><div style={styles.dataRight}>10am to 5pm</div>
                  <div style={styles.dataLeft}>WED</div><div style={styles.dataRight}>10am to Late</div>
                  <div style={styles.dataLeft}>THU</div><div style={styles.dataRight}>10am to 5pm</div>
                  <div style={styles.dataLeft}>FRI</div><div style={styles.dataRight}>10am to 5pm</div>
                  <div style={styles.dataLeft}>SAT</div><div style={styles.dataRight}>Closed</div>
                  <div style={styles.dataLeft}>SUN</div><div style={styles.dataRight}>Closed</div>
                </div>
            </div>

            <div style={styles.infoHolder}>
              <div style={styles.text}>Contact</div>
              <div style={styles.data}>01132 887219</div>
              <div style={styles.data}>hello@everprettybeautystudio.co.uk</div>
            </div>

            <div style={styles.infoHolder}>
              <div style={styles.text}>Address</div>
              <div style={styles.data}>Iveridge Hall</div>
              <div style={styles.data}>Wakefield Road</div>
              <div style={styles.data}>Oulton</div>
              <div style={styles.data}>Leeds</div>
              <div style={styles.data}>LS26 8EU</div>
            </div>

          </div>
        </BrowserView>

        <MobileView>
          <ContactTabs />
        </MobileView>

      </div>

    )
  }
}

export default Contact;
