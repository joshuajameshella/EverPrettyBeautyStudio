import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.png';

const styles = {
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100vw',
    height: '20vh',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    transform: 'rotate(0deg)',
    zIndex:10,
    fontFamily: 'Muli, sans-serif',
  },
  logo: {
    width: '30vw',
    paddingTop: '2%',
    marginLeft: '35vw',
  },
  leftHolder: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '35vw',
    height: '20vh',
  },
  rightHolder: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '35vw',
    height: '20vh',
  },
  leftLink: {
    position: 'relative',
    float: 'right',
    marginRight: '10%',
    marginTop: '8vh',
    textDecoration: 'none',
    color: 'rgb(50, 50, 50)',
  },
  rightLink: {
    position: 'relative',
    float: 'left',
    marginLeft: '10%',
    marginTop: '8vh',
    textDecoration: 'none',
    color: 'rgb(50, 50, 50)',
  },
};


class Header extends Component {
  render() {
    return (
      <div style={styles.header}>

        <div style={styles.leftHolder}>
          <NavLink to="/reviews" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'REVIEWS'}</NavLink>
          <NavLink to="/treatments" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'TREATMENTS'}</NavLink>
        </div>

        <a href="/">
          <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logo} />
        </a>

        <div style={styles.rightHolder}>
          <NavLink to="/gallery" style={styles.rightLink} activeStyle={styles.activeLink} exact>{'GALLERY'}</NavLink>
          <NavLink to="/contact" style={styles.rightLink} activeStyle={styles.activeLink} exact>{'CONTACT'}</NavLink>
        </div>

      </div>
    )
  }
}

export default Header;
