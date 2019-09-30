import React, { Component } from "react";
import { isBrowser } from "react-device-detect";


const tileData = [
  { img: require('../images/reviews/review1.png') },
  { img: require('../images/reviews/review2.png') },
  { img: require('../images/reviews/review3.png') },
  { img: require('../images/reviews/review4.png') },
  { img: require('../images/reviews/review5.png') },
  { img: require('../images/reviews/review6.png') },
  { img: require('../images/reviews/review7.png') },
  { img: require('../images/reviews/review8.png') },
];

const styles = {
  desktop: {
    minWidth: 200,
    minHeight: 200,
    width: 'calc((80vw / 4) - 28px)',
    height: 'calc((80vw / 4) - 28px)',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '3px solid rgba(255, 255, 255, 0.2)',
    margin: 10,
    position: 'relative',
    float: 'left'
  },
  mobile: {
    width: 'calc((80vw / 2) - 28px)',
    height: 'calc((80vw / 2) - 28px)',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '3px solid rgba(255, 255, 255, 0.2)',
    margin: 10,
    position: 'relative',
    float: 'left'
  }
};

class Reviews extends Component {

  render() {
    return (
      <div style={{ width: '100%', height: 'calc(85vw - 200px)' }}>
        {tileData.map(tile => (
          <div key={tile.img}>
            <img style={isBrowser ? styles.desktop : styles.mobile } src={tile.img} alt="review"/>
          </div>
        ))}

      </div>
    );
  }
}

export default Reviews
