import React from 'react';
import Card from './Card.jsx';
import Definitions from './Definitions.jsx';
import ListGroup from './ListGroup.jsx';
import BtnGroup from './BtnGroup.jsx';
import CustomTextInput from './CustomTextInput.jsx';
import Wrapper from '../pages/Wrapper.jsx';

const definitions = [
  { dd: 'term one', dt: 'description two' },
  { dd: 'another term', dt: 'another description' },
];

const StatelessComponents = () => (
  <Wrapper>
    <Card>
      <Card.Body>
        <Card.Title>Simple card</Card.Title>
        <Card.Text>Some text</Card.Text>
        <Card.Button />
      </Card.Body>
    </Card>
    <Definitions data={definitions} />
    <ListGroup><p>one</p><p>two</p></ListGroup>
    <BtnGroup />
    <CustomTextInput />
  </Wrapper>
);

export default StatelessComponents;
