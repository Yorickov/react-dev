import React from 'react';
import ModalComponent from '../src/components/modal/ModalComponent.jsx';

it('ModalComponent', () => {
  const wrapper = mount(<ModalComponent />);
  expect(wrapper.find('.modal').hasClass('show')).toBeFalsy();
  expect(wrapper.render()).toMatchSnapshot();

  const button = wrapper.find('.modal-open-button');

  button.simulate('click');
  expect(wrapper.find('.modal').hasClass('show')).toBeTruthy();
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.header-close-icon').simulate('click');
  expect(wrapper.find('.modal').hasClass('show')).toBeFalsy();

  button.simulate('click');
  expect(wrapper.find('.modal').hasClass('show')).toBeTruthy();
  wrapper.find('.footer-close-button').simulate('click');
  expect(wrapper.find('.modal').hasClass('show')).toBeFalsy();
});
