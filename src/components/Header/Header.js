import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import HamburgerSpring from './Hamburger/HamburgerSpring.js'
import './stylesheet.css';

import { styles } from './Header.styles';

import logo from '../../images/logo.png';

const renderBig = () => (
  <div>
    <div style={styles.leftHolder}>
      <NavLink to="/reviews" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'REVIEWS'}</NavLink>
      <NavLink to="/treatments" style={styles.leftLink} activeStyle={styles.activeLink} exact>{'TREATMENTS'}</NavLink>
    </div>

    <a href="/">
      <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoBig} />
    </a>

    <div style={styles.rightHolder}>
      <NavLink to="/gallery" style={styles.rightLink} activeStyle={styles.activeLink} hoverStyle={styles.hover} exact>{'GALLERY'}</NavLink>
      <NavLink to="/contact" style={styles.rightLink} activeStyle={styles.activeLink} exact>{'CONTACT'}</NavLink>
    </div>
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
        {this.state.width < 1000 ?
          <div>

            <a href="/">
              <img src={logo} alt={"Ever Pretty Beauty Studio Logo"} style={styles.logoSmall} />
            </a>

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

          </div>
          :
          renderBig()
        }
        {this.state.buttonActive ?
          <div transitionName="example">
            { this.state.buttonActive ? <div className='panel' /> : null }
          </div>
          :
          <div />
        }
      </div>
    )
  }
}

export default Header;
