import React from 'react';
import PropTypes from 'prop-types';

import './Button.module.scss';

class Button extends React.Component {
  handleClick(e) {
    e.preventDefault();

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { children, style } = this.props;

    return (
      <button
        className='button'
        disabled={this.props.disabled || false}
        onClick={(e) => this.handleClick(e)}
        style={style}>
        <span className='text'>{children}</span>
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default Button;
