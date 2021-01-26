import React from 'react';
import TodoBox from '../src/components/todo/TodoBox.jsx';

it('TodoBox', () => {
  const mockEvent = { preventDefault: jest.fn() };

  const wrapper = mount(<TodoBox />);
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find('.todo-remove-item-form')).toHaveLength(0);

  const input = wrapper.find('.todo-form input[type="text"]');
  const form = wrapper.find('.todo-form');

  input.simulate('change', { target: { value: 'first task' } });
  expect(wrapper.render()).toMatchSnapshot();

  form.simulate('submit', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();

  input.simulate('change', { target: { value: 'second task' } });
  expect(wrapper.render()).toMatchSnapshot();

  form.simulate('submit', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find('.todo-remove-item-form')).toHaveLength(2);

  const items = wrapper.find('.todo-remove-item-form');
  items.at(0).simulate('submit', mockEvent);
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find('.todo-remove-item-form')).toHaveLength(1);
});
