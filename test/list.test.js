import React from 'react';
import ListGroup from '../src/components/simple/ListGroup.jsx';

it('ListGroup', () => {
  const wrapper = shallow(
    <ListGroup>
      <p>one</p>
      <p>two</p>
    </ListGroup>,
  );

  expect(wrapper.render()).toMatchSnapshot();
});
