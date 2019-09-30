import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Maps from '../components/maps';

import { styles } from './styles/Contact.styles';

class Contact extends Component {

  render() {
    return (
      <div style={styles.main}>
        <BrowserView>
          <div style={styles.mapContainer}>
            <Maps />
          </div>

          <div style={styles.infoContainer}>

            <div style={styles.infoHolder}>
              <div style={styles.text}>Opening Times</div>
              <div style={styles.dataLeft}>MON</div><div style={styles.dataRight}>09:30 to 17:00</div>
              <div style={styles.dataLeft}>TUE</div><div style={styles.dataRight}>09:30 to 17:00</div>
              <div style={styles.dataLeft}>WED</div><div style={styles.dataRight}>09:30 to 19:00</div>
              <div style={styles.dataLeft}>THU</div><div style={styles.dataRight}>09:30 to 19:00</div>
              <div style={styles.dataLeft}>FRI</div><div style={styles.dataRight}>09:30 to 17:00</div>
            </div>

            <div style={styles.infoHolder}>
              <div style={styles.text}>Contact</div>
              <div style={styles.data}>01924 363523</div>
              <div style={styles.data}>beautytherapybyshelby@gmail.com</div>
            </div>

            <div style={styles.infoHolder}>
              <div style={styles.text}>Address</div>
              <div style={styles.data}>21 Eton Walk</div>
              <div style={styles.data}>Wrenthorpe</div>
              <div style={styles.data}>Wakefield</div>
              <div style={styles.data}>WF1 2FH</div>
            </div>

          </div>
        </BrowserView>

        <MobileView>
          <div style={styles.infoContainerMobile}>
            <h1 style={styles.mobileTitle}>Contact Us</h1>
            <div style={styles.subTitleMobile}>Simply call if you wish to book an appointment or speak to us.</div>

            <div style={styles.infoHolderMobile}>
              <div style={styles.text}>Opening Times</div>
              <div style={styles.dataLeft}>MON</div><div style={styles.dataRight}>09:30 to 17:00</div>
              <div style={styles.dataLeft}>TUE</div><div style={styles.dataRight}>09:30 to 17:00</div>
              <div style={styles.dataLeft}>WED</div><div style={styles.dataRight}>09:30 to 19:00</div>
              <div style={styles.dataLeft}>THU</div><div style={styles.dataRight}>09:30 to 19:00</div>
              <div style={styles.dataLeft}>FRI</div><div style={styles.dataRight}>09:30 to 17:00</div>
            </div>

            <div style={styles.infoHolderMobile}>
              <div style={styles.text}>Contact</div>
              <div style={styles.data}>01924 363523</div>
              <div style={styles.data}>beautytherapybyshelby@gmail.com</div>
            </div>

            <div style={styles.infoHolderMobile}>
              <div style={styles.text}>Address</div>
              <div style={styles.data}>21 Eton Walk</div>
              <div style={styles.data}>Wrenthorpe</div>
              <div style={styles.data}>Wakefield</div>
              <div style={styles.data}>WF1 2FH</div>
            </div>

          </div>
        </MobileView>

      </div>

    )
  }
}

export default Contact;
