import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, text }) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{text}</p>
      <button type="button" className="btn btn-primary">Press me</button>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
