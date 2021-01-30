import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Collapse = (props) => {
  const { text, opened: defaultedOpened } = props;
  const [opened, setState] = useState(defaultedOpened);

  const handleToggle = (e) => {
    e.preventDefault();
    setState(!opened);
  };

  const classes = cn({
    collapse: true,
    show: opened,
  });

  return (
    <div>
      <p>
        <a className="btn btn-primary" onClick={handleToggle} href="#">
          Link with href
        </a>
      </p>
      <div className={classes}>
        <div className="card card-body">
          {text}
        </div>
      </div>
    </div>
  );
};

Collapse.defaultProps = { opened: false };
Collapse.propTypes = { opened: PropTypes.bool };

export default Collapse;
