import React from 'react';
import timeout from 'timeout-then';
import Autocomplete from '../src/components/Autocomplete.jsx';

it('Autocomplete', async () => {
  const wrapper = mount(<Autocomplete />);
  expect(wrapper.render()).toMatchSnapshot();

  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'a' } });
  await timeout(400);
  expect(wrapper.render()).toMatchSnapshot();

  input.simulate('change', { target: { value: 'alb' } });
  await timeout(400);
  expect(wrapper.render()).toMatchSnapshot();

  input.simulate('change', { target: { value: '' } });
  expect(wrapper.render()).toMatchSnapshot();
});
