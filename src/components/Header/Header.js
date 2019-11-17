import React, { Component } from "react";
import HamburgerSpring from './Hamburger/HamburgerSpring.js';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { BrowserView, MobileView } from "react-device-detect";

import Scrollchor from 'react-scrollchor';

import './stylesheet.css';
import { styles } from './Header.styles';
import logo from '../../images/logo.png';



const renderBig = () => (
  <div>
    <nav style={styles.leftHolder}>
      <Scrollchor style={styles.leftLink} animate={{ offset: -140 }} to="#treatments" >TREATMENTS</Scrollchor>
      <Scrollchor style={styles.leftLink} animate={{ offset: -140 }} to="#about" >ABOUT</Scrollchor>
    </nav>

    <Scrollchor to="/">
      <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoBig} />
    </Scrollchor>

    <nav style={styles.rightHolder}>
      <Scrollchor style={styles.rightLink} animate={{ offset: -140 }} to="#gallery" >GALLERY</Scrollchor>
      <Scrollchor style={styles.rightLink} animate={{ offset: -140 }} to="#contact" >CONTACT</Scrollchor>
    </nav>
  </div>
);


class Header extends Component {

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

  toggleButton = () => {
    this.setState({
      buttonActive: !this.state.buttonActive
    })
  }
  closeMenu = () => {
    this.setState({
      buttonActive: false
    })
  }

  render() {
    return (
      <div style={styles.header}>
        {this.state.width < 1024 ?
          <div>

            <BrowserView>
              <Scrollchor to="/" beforeAnimate={this.closeMenu}>
                <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoSmallDesktop} />
              </Scrollchor>
            </BrowserView>
            <MobileView>
              <Scrollchor to="/" beforeAnimate={this.closeMenu}>
                <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoSmallMobile} />
              </Scrollchor>
            </MobileView>

            <div style={styles.menuHolder} >
              <div style={styles.menuIcon} >
                <HamburgerSpring
                  isActive={this.state.buttonActive}
                  toggleButton={this.toggleButton}
                  buttonColor="#fff"
                  barColor="rgb(120, 120, 120)"
                />
              </div>
            </div>

            <Collapse in={this.state.buttonActive} timeout={1000}>
              <Paper elevation={4}>
                <nav style={styles.dropdownMenu}>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} animate={{ offset: -140 }} to="#about" >ABOUT</Scrollchor>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} animate={{ offset: -140 }} to="#treatments" >TREATMENTS</Scrollchor>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} animate={{ offset: -140 }} to="#gallery" >GALLERY</Scrollchor>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} animate={{ offset: -140 }} to="#contact" >CONTACT</Scrollchor>
                </nav>
              </Paper>
            </Collapse>

          </div>
          :
          renderBig()
        }


      </div>
    )
  }
}

export default Header;
