import React from 'react';
import PropTypes from 'prop-types';
import FancyBorder from './FancyBorder.jsx';

const Dialog = (props) => {
  const { title, message, children } = props;
  return (
    <FancyBorder color="primary">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{message}</p>
      <form>
        {children}
      </form>
    </FancyBorder>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Dialog;
