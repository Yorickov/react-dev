import React from 'react';
import Card from '../src/components/simple/Card.jsx';

it('Card', () => {
  const params = {
    title: 'title',
    text: 'text',
  };
  const wrapper = shallow(<Card { ...params } />);
  expect(wrapper.render()).toMatchSnapshot();
});
