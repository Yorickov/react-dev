import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const FancyBorder = (props) => {
  const { color, children } = props;
  const classes = cn({
    card: true,
    [`text-${color}`]: true,
  });
  return (
    <div className={classes}>
      <div className='card-body'>
        {children}
      </div>
    </div>
  );
};

FancyBorder.propTypes = {
  color: PropTypes.string,
};

export default FancyBorder;
