import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import ParentPortal from 'components/ParentPortal';
// import configureStore from 'utils/configureStore';

// import './main.scss';

// let store = configureStore();

class Root extends Component {
  render() {
    return (
      <ParentPortal />
    );
  }
}

render(<Root />, document.getElementById('root'));
