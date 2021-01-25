import React, { Fragment } from 'react';
import Card from './Card.jsx';
import Definitions from './Definitions.jsx';
import ListGroup from './ListGroup.jsx';
import BtnGroup from './BtnGroup.jsx';

const definitions = [
  { dd: 'term one', dt: 'description two' },
  { dd: 'another term', dt: 'another description' },
];

const MiscComponents = () => (
  <Fragment>
    <Card title="Simple card" text="Some text" />
    <Definitions data={definitions} />
    <ListGroup><p>one</p><p>two</p></ListGroup>
    <BtnGroup />
  </Fragment>
);

export default MiscComponents;
