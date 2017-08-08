import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import NavBar from '../NavBar';

import './ParentPortal.module.scss';


class ParentPortal extends Component {

  render() {
    return (
      <div className='container'>
        <NavBar />
        Hi Mom!
      </div>
    );
  }
}

export default ParentPortal;
