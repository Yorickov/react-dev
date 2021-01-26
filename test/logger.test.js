import React from 'react';
import Logger from '../src/components/Logger.jsx';

it('Logger', () => {
  const wrapper = mount(<Logger />);
  expect(wrapper.render()).toMatchSnapshot();

  const inc = wrapper.find('.inc');
  const dec = wrapper.find('.dec');
  expect(wrapper.find('.list-group-item')).toHaveLength(0);

  inc.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find('.list-group-item')).toHaveLength(3);

  const items = wrapper.find('.list-group-item-action');
  items.at(1).simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find('.list-group-item')).toHaveLength(2);
});
