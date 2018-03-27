import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="Card">
        <h1 className="Card-title">{this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
