import React from 'react';
import { styles } from './Contact.styles';
import MapBox from '../Map/MapBox';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class ContactTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (

      <Paper styles={{ flexGrow: 1, zIndex: 10 }}>

        <div style={styles.infoContainerMobile}>
          <h1 style={styles.mobileTitle}>Contact Us</h1>
        </div>

        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >

          <Tab label="Info" />
          <Tab label="Map" />

        </Tabs>

        {value === 0 &&
          <TabContainer>
              <Paper style={styles.infoHolderMobile}>
                <div style={styles.text}>Opening Times</div>
                <div style={styles.dataLeft}>MON</div><div style={styles.dataRight}>10am to 5pm</div>
                <div style={styles.dataLeft}>TUE</div><div style={styles.dataRight}>10am to 5pm</div>
                <div style={styles.dataLeft}>WED</div><div style={styles.dataRight}>10am to late</div>
                <div style={styles.dataLeft}>THU</div><div style={styles.dataRight}>10am to 5pm</div>
                <div style={styles.dataLeft}>FRI</div><div style={styles.dataRight}>10am to 5pm</div>
                <div style={styles.dataLeft}>SAT</div><div style={styles.dataRight}>closed</div>
                <div style={styles.dataLeft}>SUN</div><div style={styles.dataRight}>closed</div>
              </Paper>

              <Paper style={styles.infoHolderMobile}>
                <div style={styles.text}>Contact</div>
                <div style={styles.data}>01132 887219</div>
                <div style={styles.data}>hello@everprettybeautystudio.co.uk</div>
              </Paper>

              <Paper style={styles.infoHolderMobile}>
                <div style={styles.text}>Address</div>
                <div style={styles.data}>Iveridge Hall</div>
                <div style={styles.data}>Wakefield Road</div>
                <div style={styles.data}>Oulton</div>
                <div style={styles.data}>Leeds</div>
                <div style={styles.data}>LS26 8EU</div>
              </Paper>

              <div style={{ position: 'relative', float: 'left', width: '100%', height: 50 }}/>
          </TabContainer>
        }

        {value === 1 &&
          <TabContainer>
            <div style={styles.mapContainer}>
              <MapBox />
            </div>
          </TabContainer>
        }

      </Paper>
    );
  }
}


export default ContactTabs;
