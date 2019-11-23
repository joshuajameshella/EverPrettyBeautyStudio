import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { ZoomControl } from "react-mapbox-gl";
import Icon from "./marker.png"

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoiam9zaHVhamFtZXNoZWxsIiwiYSI6ImNrMmt1MG95NzAwNzEzb3F1NDFibG9ka3YifQ.oYeItES8Jjm8wu1GGlNecw'
});

export default class MapBox extends Component {
  render() {
    const image = new Image(30, 30);
    image.src = Icon;
    const images = ["myImage", image];
    return (
      <Map
        style={"mapbox://styles/mapbox/light-v10"}
        zoom={[12]}
        containerStyle={{
          height: '80vh',
          width: '100vw'
        }}
        scrollZoom={false}
        center={[-1.4568, 53.7348]}
      >
        <ZoomControl/>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
          images={images}
        >
          <Feature coordinates={[-1.4568, 53.7348]} />
        </Layer>
      </Map>
    )
  }
}
