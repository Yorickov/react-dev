import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CatImage from '../../images/cat.png';

class Cat extends Component {
  render() {
    const { mouseCoords } = this.props;
    const style = {
      position: 'absolute',
      left: mouseCoords.x,
      top: mouseCoords.y,
      width: '100px',
      height: '100px',
    };

    return <img src={CatImage} style={style} />;
  }
}

Cat.propTypes = {
  mouseCoords: PropTypes.object,
};

export default Cat;
