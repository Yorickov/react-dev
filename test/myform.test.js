import React from 'react';
import MyForm from '../src/components/MyForm.jsx';

it('MyForm', () => {
  const mockEvent = { preventDefault: jest.fn() };

  const wrapper = shallow(<MyForm />);
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('form').simulate('submit', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('button').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper
    .find('input[name="acceptRules"]')
    .simulate('change', { target: { name: 'acceptRules', type: 'checkbox', checked: true } });

  wrapper
    .find('input[name="city"]')
    .simulate('change', { target: { type: 'input', name: 'city', value: 'MyCity' } });

  wrapper
    .find('input[name="email"]')
    .simulate('change', { target: { type: 'input', name: 'email', value: 'test@email.com' } });

  wrapper
    .find('input[name="password"]')
    .simulate('change', { target: { type: 'input', name: 'password', value: 'mysuperpass' } });

  wrapper.find('form').simulate('submit', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('button').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
