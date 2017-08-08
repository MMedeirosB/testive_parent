import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

import './Profile.module.scss';

class Profile extends Component {
  render() {
    const { src, name, subtitle, phone } = this.props;

    return (
      <div className='profileContainer'>
        <Avatar src={src} alt={name}/>
        <div className='name'>
          {name}
        </div>
        <div className='subtitle'>
          {subtitle}
        </div>
        <div className='subtitle'>
          {phone}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  phone: PropTypes.string.isRequired
};

export default Profile;
