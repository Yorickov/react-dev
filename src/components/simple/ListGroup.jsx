import React, { Children } from 'react';

const ListGroup = ({ children }) => (
  <ul className="list-group">
    {Children.map(children, (child) => (
      <li className="list-group-item">{child}</li>))}
  </ul>
);

export default ListGroup;
