import React from 'react';
import BtnGroup from '../src/components/stateless/BtnGroup.jsx';

it('BtnGroup', () => {
  const wrapper = shallow(<BtnGroup />);

  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.left').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.right').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
