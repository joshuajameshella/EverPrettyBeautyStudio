import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

const Main = () => (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
);


ReactDOM.render((
    <Main />
  ),
  document.getElementById('root'));
