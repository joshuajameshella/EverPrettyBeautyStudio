import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHVhamFtZXNoZWxsIiwiYSI6ImNrN2kzcHJscjBjM3kzZnByZTg3MWE1aHkifQ.ux_g44SHiS6gYkPJG1Rltw';

export default class MapBox extends Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: -1.4568,
      lat: 53.7348,
      zoom: 12
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on('load', function() {
      map.loadImage(
        'https://cdn.onlinewebfonts.com/svg/img_427372.png',
        function(error, image) {
          if (error) throw error;
          map.addImage('marker', image);
          map.addSource('point', {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [-1.4568, 53.7348]
                  }
                }
              ]
            }
          });
          map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
              'icon-image': 'marker',
              'icon-size': 0.05
            }
          });
        });
      });
  }

  render() {
    return (
      <div
        style={{ position: 'relative', float: 'left', width: '100%', height: '100%' }}
        ref={el => this.mapContainer = el}
      />
    )
  }
}
