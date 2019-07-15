import React, { Component } from "react";

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: 70,
    zIndex: 11,
    backgroundColor: 'rgb(255, 255, 255)',
  },
};


class Header extends Component {
  render() {
    return (
      <div style={styles.header} />
    )
  }
}

export default Header;
