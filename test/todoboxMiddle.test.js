import React from 'react';
import timeout from 'timeout-then';
import TodoBox from '../src/components/todo-middle/TodoBox.jsx';

it('TodoBox', async () => {
  const mockEvent = { preventDefault: jest.fn() };

  const wrapper = mount(<TodoBox />);
  expect(wrapper.render()).toMatchSnapshot();

  const input = wrapper.find('input');
  const form = wrapper.find('form');

  input.simulate('change', { target: { value: 'first task' } });
  expect(wrapper.render()).toMatchSnapshot();

  form.simulate('submit', mockEvent);
  await timeout(400);
  expect(wrapper.render()).toMatchSnapshot();

  input.simulate('change', { target: { value: 'second task' } });
  expect(wrapper.render()).toMatchSnapshot();

  form.simulate('submit', mockEvent);
  await timeout(400);
  expect(wrapper.render()).toMatchSnapshot();

  const activeTask = wrapper.find('.todo-active-tasks .todo-task').at(0);
  activeTask.simulate('click');
  await timeout(400);
  wrapper.update();
  expect(wrapper.render()).toMatchSnapshot();

  const finishedTask = wrapper.find('.todo-finished-tasks .todo-task');
  finishedTask.simulate('click');
  await timeout(400);
  wrapper.update();
  expect(wrapper.render()).toMatchSnapshot();
});
