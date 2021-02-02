import React from 'react';
import TicTacToe from '../src/components/tictactoe/TicTacToe.jsx';

it('TicTacToe', () => {
  const wrapper = mount(<TicTacToe />);

  expect(wrapper.find('.game-info li')).toHaveLength(1);
  expect(wrapper.find('.game-info .status').text()).toEqual('Next step: X');
  expect(wrapper.render()).toMatchSnapshot();

  const firstLine = wrapper.find('.table tr').at(0);
  const secondLine = wrapper.find('.table tr').at(1);

  firstLine.find('button').at(0).simulate('click');
  expect(wrapper.find('.game-info .status').text()).toEqual('Next step: O');
  secondLine.find('button').at(0).simulate('click');

  firstLine.find('button').at(1).simulate('click');
  secondLine.find('button').at(1).simulate('click');

  firstLine.find('button').at(2).simulate('click');
  expect(wrapper.find('.game-info li')).toHaveLength(6);
  expect(wrapper.find('.game-info .status').text()).toEqual('The winner is X');

  expect(wrapper.render()).toMatchSnapshot();
});
