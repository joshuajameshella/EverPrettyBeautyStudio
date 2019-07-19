import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

class Home extends Component {
  render() {
    return (
      <div>
        <a href='#section1'> Go to section 1 </a>
        <a href='#section2'> Go to section 2 </a>
        <ScrollableAnchor id={'section1'}>
          <div style={{ width: '100vw', height: 1000 }}> Hello World </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
        <div style={{ width: '100vw', height: 1000 }}> How are you World? </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Home;
