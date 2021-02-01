import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const [currentIdx, setState] = useState(0);

  const setNext = (e) => {
    e.preventDefault();
    const { images } = props;
    const nextIdx = ((currentIdx + 1) % images.length);
    setState(nextIdx);
  };

  const setPrev = (e) => {
    e.preventDefault();
    const { images } = props;
    const prevIdx = ((currentIdx + (images.length - 1)) % images.length);
    setState(prevIdx);
  };

  const renderItems = () => {
    const { images } = props;
    return images.map((url, id) => {
      const classes = cn({
        'carousel-item': true,
        active: currentIdx === id,
      });

      const image = require(`../images/${url}`); // eslint-disable-line

      return (
        <div key={url} className={classes}>
          <img alt="" className="d-block w-100" src={image} />
        </div>
      );
    });
  };

  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {renderItems()}
      </div>
      <a href="#carousel" className="carousel-control-prev" onClick={setPrev} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" />
        <span className="sr-only">Previous</span>
      </a>
      <a href="#carousel" className="carousel-control-next" onClick={setNext} role="button" data-slide="next">
        <span className="carousel-control-next-icon" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array,
};

export default Carousel;
