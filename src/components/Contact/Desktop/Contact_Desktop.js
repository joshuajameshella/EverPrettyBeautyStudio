import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Map from '../../Map/MapBox.js';
import { styles } from './Contact.styles';

export default class Contact_Desktop extends Component {
  render() {
    return (
      <div style={styles.main}>

        <div style={styles.contactSection}>
          <div style={{ position: 'relative', float: 'left', width: '100%', height: 20 }} />
          <Paper style={styles.infoHolder}>
            <div style={styles.text}>Opening Times</div>
            <div style={styles.dataLeft}>MON</div><div style={styles.dataRight}>10am - 5pm</div>
            <div style={styles.dataLeft}>TUE</div><div style={styles.dataRight}>10am - 5pm</div>
            <div style={styles.dataLeft}>WED</div><div style={styles.dataRight}>10am - Late</div>
            <div style={styles.dataLeft}>THU</div><div style={styles.dataRight}>10am - Late</div>
            <div style={styles.dataLeft}>FRI</div><div style={styles.dataRight}>10am - 5pm</div>
            <div style={styles.dataLeft}>SAT</div><div style={styles.dataRight}>Closed</div>
            <div style={styles.dataLeft}>SUN</div><div style={styles.dataRight}>Closed</div>
          </Paper>

          <Paper style={styles.infoHolder}>
            <div style={styles.text}>Contact</div>
            <div style={styles.data}>01132 887219</div>
            <div style={styles.data}>hello@everprettybeautystudio.co.uk</div>
          </Paper>

          <Paper style={styles.infoHolder}>
            <div style={styles.text}>Address</div>
            <div style={styles.data}>Iveridge Hall</div>
            <div style={styles.data}>Wakefield Road</div>
            <div style={styles.data}>Oulton</div>
            <div style={styles.data}>Leeds</div>
            <div style={styles.data}>LS26 8EU</div>
          </Paper>
        </div>

        <div style={styles.column} />

        <div style={styles.mapContainer}>
          <Map />
        </div>

        <div style={{ position: 'absolute', bottom: 0, width: '100vw', height: 50, zIndex: 20, backgroundColor: 'white', borderTop: '1px solid rgba(0, 0, 0, 0.3)' }}>
          <div style={{ bottom: 5, position: 'absolute', right: 40, fontSize: 10 }}>{"Ever Pretty Beauty Studio - 2020"}</div>
        </div>

      </div>
    );
  }
}
