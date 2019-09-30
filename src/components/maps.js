import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class MyComponents extends Component {
  render() {

     return (

       <LoadScript
         id="script-loader"
         googleMapsApiKey="AIzaSyDBafgyXR-AxDRoFWjyGBTEJMtcqvL5pIw"
       >
         <GoogleMap
           id="circle-example"
           mapContainerStyle={{
             height: "100%",
             width: "100%"
           }}
           zoom={17}
           center={{
             lat: 53.705064,
             lng: -1.514111
           }}
         />
       </LoadScript>
     )
  }
}
export default MyComponents;
