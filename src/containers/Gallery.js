import React, { Component } from "react";
import { styles } from './styles/Gallery.styles';
import { BrowserView, MobileView } from "react-device-detect";
import InstaGridDesktop from '../components/instagram/InstaGridDesktop';
import InstaGridMobile from '../components/instagram/InstaGridMobile';
import Paper from '@material-ui/core/Paper';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      width: 0,
      buttonActive: false,
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
      <div style={styles.main}>
        <div style={{ width: '80vw', marginLeft: '10vw', marginTop: 50 }}>

          <BrowserView>
            {this.state.width < 1300 ?
              <Paper style={{
                overflowX: 'hidden',
                overflowY : 'scroll',
                fontSize: '14px',
                maxHeight: 'calc(80vh - 40px)',
                paddingLeft: '5%',
                paddingRight: '5%'
              }}>
                <div style={{ fontSize: 30, fontFamily: 'Muli, sans-serif', marginTop: 40, marginBottom: 40 }}>Image Gallery</div>
                <div style={styles.subtext}>{'Scroll to view'}</div>
                <InstaGridMobile account="everprettybeautystudio" numberOfMediaElements={20} />
              </Paper>
              :
              <InstaGridDesktop account="everprettybeautystudio" numberOfMediaElements={8} />
            }
          </BrowserView>

          <MobileView>
            <Paper style={{
              overflowX: 'hidden',
              overflowY : 'scroll',
              fontSize: '14px',
              maxHeight: 'calc(80vh - 40px)',
              paddingLeft: '5%',
              paddingRight: '5%'
            }}>
              <div style={{ fontSize: 30, fontFamily: 'Muli, sans-serif', marginTop: 40, marginBottom: 40 }}>Image Gallery</div>
              <div style={styles.subtext}>{'Scroll to view'}</div>
              <InstaGridMobile account="everprettybeautystudio" numberOfMediaElements={20} />
            </Paper>
          </MobileView>
        </div>
      </div>
    )
  }
}

export default Gallery;
