import { uniqueId } from 'lodash';
import update from 'immutability-helper';

const countries = ['Albania', 'Armenia', 'Belarus'];
let tasks = [];

export const findCountries = (key) => (
  countries.filter((c) => c.toLowerCase().startsWith(key.toLowerCase()))
);

export const addTask = (data) => {
  const task = { id: uniqueId(), body: data, state: 'active' };
  tasks.push(task);
  return task;
};

export const finishTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  const updatedTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
  tasks = updatedTasks;
};

export const activateTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  const updatedTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
  tasks = updatedTasks;
};

export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};
