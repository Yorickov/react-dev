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
