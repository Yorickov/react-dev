import React from 'react';
import Card from '../src/components/simple/Card.jsx';

it('Card', () => {
  const params = {
    title: 'title',
    text: 'text',
  };
  const wrapper = mount(<Card { ...params } />);

  expect(wrapper.prop('title')).toMatch(params.title);
  expect(wrapper.prop('text')).toMatch(params.text);

  expect(wrapper.render()).toMatchSnapshot();
});
