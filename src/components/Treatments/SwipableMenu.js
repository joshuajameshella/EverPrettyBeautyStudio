import React, { Component } from "react";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#fff',
  },
  slide2: {
    backgroundColor: '#fff',
  },
  slide3: {
    backgroundColor: '#fff',
  },
};

class SwipableMenu extends Component {
  render() {
    return (
      <div style={{  }}>
        <SwipeableViews enableMouseEvents>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <img style={this.props.style} src={require("../../images/treatments/cover.png")} alt={"cover page"}/>
          </div>

          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <img style={this.props.style} src={require("../../images/treatments/page1.png")} alt={"page 1 of treatments"}/>
          </div>

          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <img style={this.props.style} src={require("../../images/treatments/page1.png")} alt={"page two of treatments"}/>
          </div>

          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <img style={this.props.style} src={require("../../images/treatments/page2.png")} alt={"page three of treatments"}/>
          </div>

          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <img style={this.props.style} src={require("../../images/treatments/page4.png")} alt={"page four of treatments"}/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default SwipableMenu;

SwipableMenu.propTypes = {
  style: PropTypes.object
};
