import React, { Component } from "react";
import SmartSlider from "react-smart-slider";


import slide_1 from "../images/slide_1.png";
import slide_2 from "../images/slide_2.png";
import slide_3 from "../images/slide_3.png";


const slidesArray = [
  { title: "", url: slide_1 },
  { title: "", url: slide_2 },
  { title: "", url: slide_3 },
];


class Home extends Component {
  render() {
    return (
      <SmartSlider slides={slidesArray} autoSlide={true} autoSlideInterval={5000} />
    )
  }
}

export default Home;
