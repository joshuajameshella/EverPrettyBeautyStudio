import React, { Component } from "react";
import { styles } from './styles/Treatments.styles';
import { BrowserView, MobileView } from "react-device-detect";
import SwipableMenu from '../components/Treatments/SwipableMenu';
import DesktopMenu from '../components/Treatments/DesktopMenu';

class Treatments extends Component {

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
        <div style={styles.treatmentsHolder}>

          <BrowserView>
            {this.state.width < 1090 ?
              <SwipableMenu style={{ height: '75vh', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
              :
              <DesktopMenu />
            }
          </BrowserView>

          <MobileView>
            <SwipableMenu style={{ width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
          </MobileView>

        </div>
      </div>
    )
  }
}

export default Treatments;
