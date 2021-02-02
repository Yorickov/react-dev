import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
  const { value, onClick } = props;
  return (
    <button
      className="square border-0"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
