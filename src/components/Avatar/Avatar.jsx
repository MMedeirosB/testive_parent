import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Avatar.module.scss';

class Avatar extends Component {
  render() {
    const { src, alt } = this.props;

    return (
      <img src={src} alt={alt} className='avatar'/>
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Avatar;
