import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from '../../lib/routes';
import api from '../../lib/api';

const TodoBox = () => {
  const [newTaskText, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get(routes.tasksPath());
      setTasks(response.data);
    })();
  }, []);

  const handleChangeText = ({ target: { value } }) => {
    setText(value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const response = await api.post(routes.tasksPath(), { body: newTaskText });

    const newTasks = [response.data, ...tasks];
    setTasks(newTasks);
    setText('');
  };

  const handleFinishTask = (id) => async (e) => {
    e.preventDefault();
    await api.patch(routes.finishTaskPath(id));

    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
    setTasks(updatedTasks);
  };

  const handleActivateTask = (id) => async (e) => {
    e.preventDefault();
    await api.patch(routes.activateTaskPath(id));

    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
    setTasks(updatedTasks);
  };

  const renderActiveTasks = (activeTasks) => (
    <div className="todo-active-tasks">
      {activeTasks
        .map((t) => <Item key={t.id} task={t} onChangeTask={handleFinishTask(t.id)}/>)}
    </div>
  );

  const renderFinishedTasks = (finishedTasks) => (
    <div className="todo-finished-tasks">
      {finishedTasks
        .map((t) => <Item key={t.id} task={t} onChangeTask={handleActivateTask(t.id)}/>)}
    </div>
  );

  const renderForm = () => (
    <form className="todo-form" onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <input
          type="text"
          onChange={handleChangeText}
          value={newTaskText}
          required
          className="form-control mr-3"
          placeholder="I am going..."
        />
      </div>
      <button type="submit" className="btn btn-primary">add</button>
    </form>
  );

  const activeTasks = tasks.filter((t) => t.state === 'active');
  const finishedTasks = tasks.filter((t) => t.state === 'finished');

  return (
    <div>
      <div className="mb-3">
        {renderForm()}
      </div>
      {activeTasks.length > 0 && renderActiveTasks(activeTasks)}
      {finishedTasks.length > 0 && renderFinishedTasks(finishedTasks)}
    </div>
  );
};

export default TodoBox;
