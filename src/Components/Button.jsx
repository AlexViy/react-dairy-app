import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    styleName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <button className={`Button ${this.props.styleName}`}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;