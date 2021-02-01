import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import Item from './Item.jsx';

const TodoBox = () => {
  const [newTaskText, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChangeTask = ({ target: { value } }) => {
    setText(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newTask = { id: uniqueId(), text: newTaskText };
    setTasks([newTask, ...tasks]);
    setText('');
  };

  const handleRemoveTask = (removingId) => (e) => {
    e.preventDefault();
    setTasks(tasks.filter(({ id }) => id !== removingId));
  };

  const renderForm = () => (
    <form onSubmit={handleSubmitForm} className="todo-form row">
      <div className="col-11">
        <input
          type="text"
          onChange={handleChangeTask}
          value={newTaskText}
          required
          className="form-control mr-3"
          placeholder="I am going..."
        />
      </div>
      <button type="submit" className="btn btn-primary col-1">add</button>
    </form>
  );

  return (
    <div>
      <div className="mb-3">
        {renderForm()}
      </div>
      {tasks.map((task) => (
        <div key={task.id}>
          <Item task={task} onRemove={handleRemoveTask(task.id)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoBox;
