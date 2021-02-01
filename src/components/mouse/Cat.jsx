import React from 'react';
import PropTypes from 'prop-types';
import CatImage from '../../images/cat.png';

const Cat = (props) => {
  const { mouseCoords } = props;
  const style = {
    position: 'absolute',
    left: mouseCoords.x,
    top: mouseCoords.y,
    width: '100px',
    height: '100px',
  };

  return <img src={CatImage} style={style} />;
};

Cat.propTypes = {
  mouseCoords: PropTypes.object,
};

export default Cat;
