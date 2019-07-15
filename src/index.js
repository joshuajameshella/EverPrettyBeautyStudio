import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { styles } from './styles/index.styles';

import Home from './containers/Home';

const App = () => (
  <div style={styles.body}>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
);


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root'));
