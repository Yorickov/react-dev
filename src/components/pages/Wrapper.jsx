import React, { Children } from 'react';

const Wrapper = ({ children }) => (
  <div className="row flex-column">
    {Children.map(children, (child) => (
      <div className="col py-3">{child}</div>))}
  </div>
);

export default Wrapper;
