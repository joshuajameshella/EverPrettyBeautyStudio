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
      <Scrollchor style={styles.leftLink} to="#reviews" >REVIEWS</Scrollchor>
      <Scrollchor style={styles.leftLink} to="#treatments" >TREATMENTS</Scrollchor>
    </nav>

    <a href="/">
      <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoBig} />
    </a>

    <nav style={styles.rightHolder}>
      <Scrollchor style={styles.rightLink} to="#gallery" >GALLERY</Scrollchor>
      <Scrollchor style={styles.rightLink} to="#contact" >CONTACT</Scrollchor>
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

  render() {
    return (
      <div style={styles.header}>
        {this.state.width < 1024 ?
          <div>

            <BrowserView>
              <a href="/">
                <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoSmallDesktop} />
              </a>
            </BrowserView>
            <MobileView>
              <a href="/">
                <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoSmallMobile} />
              </a>
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
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} to="#treatments" >TREATMENTS</Scrollchor>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} to="#reviews" >REVIEWS</Scrollchor>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} to="#gallery" >GALLERY</Scrollchor>
                  <Scrollchor style={styles.menuLink} beforeAnimate={this.toggleButton} to="#contact" >CONTACT</Scrollchor>
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
