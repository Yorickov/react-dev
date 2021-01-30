import React from 'react';
import Definitions from '../src/components/simple/Definitions.jsx';

it('Definitions 1', () => {
  const definitions = [
    { dd: 'term one', dt: 'description one' },
    { dd: 'term two', dt: 'description two' },
  ];
  const wrapper = shallow(<Definitions data={definitions} />);

  expect(wrapper.find('dd')).toHaveLength(2);
  expect(wrapper.render()).toMatchSnapshot();
});

it('Definitions 2', () => {
  const definitions = [];
  const wrapper = shallow(<Definitions data={definitions} />);

  expect(wrapper.find('dd')).toHaveLength(0);
  expect(wrapper.render()).toMatchSnapshot();
});
