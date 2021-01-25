import React from 'react';
import Collapse from '../src/components/Collapse.jsx';

it('Collapse', () => {
  // Enzyme's simulate doesn't mock the event object, but you can pass one yourself
  const mockEvent = { preventDefault: jest.fn() };

  const wrapper = shallow(<Collapse text="hi!!" />);
  expect(wrapper.render()).toMatchSnapshot();

  const button = wrapper.find('a');

  button.simulate('click', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();

  button.simulate('click', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();
});
