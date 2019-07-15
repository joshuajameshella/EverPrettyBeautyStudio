import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import { styles } fom './Header.styles';

import logo from '../../images/logo.png';


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
