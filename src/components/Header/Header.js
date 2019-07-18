import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import HamburgerSpring from './Hamburger/HamburgerSpring.js';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { BrowserView, MobileView } from "react-device-detect";


import './stylesheet.css';
import { styles } from './Header.styles';
import logo from '../../images/logo.png';


// <NavLink to="/reviews" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'REVIEWS'}</NavLink>
// <NavLink to="/treatments" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'TREATMENTS'}</NavLink>

const renderBig = () => (
  <div>
    <nav style={styles.leftHolder}>
      <NavLink to="/reviews" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'REVIEWS'}</NavLink>
      <NavLink to="/treatments" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'TREATMENTS'}</NavLink>
    </nav>

    <a href="/">
      <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoBig} />
    </a>

    <nav style={styles.rightHolder}>
      <NavLink to="/gallery" style={styles.rightLink} activeStyle={styles.activeLink} exact>{'GALLERY'}</NavLink>
      <NavLink to="/contact" style={styles.rightLink} activeStyle={styles.activeLink} exact>{'CONTACT'}</NavLink>
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
                  <NavLink to="/treatments" className="dropdownLink" activeStyle={styles.activeLink} exact>{'TREATMENTS'}</NavLink>
                  <NavLink to="/reviews" className="dropdownLink" activeStyle={styles.activeLink} exact>{'REVIEWS'}</NavLink>
                  <NavLink to="/gallery" className="dropdownLink" activeStyle={styles.activeLink} exact>{'GALLERY'}</NavLink>
                  <NavLink to="/contact" className="dropdownLink" activeStyle={styles.activeLink} exact>{'CONTACT'}</NavLink>
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
