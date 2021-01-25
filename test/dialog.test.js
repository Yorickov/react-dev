import React from 'react';
import SignUpDialog from '../src/components/composition/SignUpDialog.jsx';

it('SignUpDialog', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  const wrapper = mount(<SignUpDialog />);
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('input').simulate('change', { target: { value: 'Pete' } });
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('button').simulate('click');
  expect(window.alert).toBeCalledWith('Welcome to the board, Pete!');
});
