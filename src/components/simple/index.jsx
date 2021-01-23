import React, { Fragment } from 'react';
import Card from './Card.jsx';
import Definitions from './Definitions.jsx';

const definitions = [
  { dd: 'term one', dt: 'description two' },
  { dd: 'another term', dt: 'another description' },
];

const MiscComponents = () => (
  <Fragment>
    <Card title="Simple card" text="Some text" />
    <Definitions data={definitions} />
  </Fragment>
);

export default MiscComponents;
