import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import ContactDesktop from '../components/Contact/Desktop/Contact_Desktop';
import ContactTabs from '../components/Contact/Mobile/ContactTabs';
import { styles } from './styles/Contact.styles';

export default class Contact extends Component {
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
        <BrowserView>
          {this.state.width < 700 ?
            <ContactTabs />
            :
            <ContactDesktop />
          }
        </BrowserView>

        <MobileView>
          <ContactTabs />
        </MobileView>

      </div>
    )
  }
}
