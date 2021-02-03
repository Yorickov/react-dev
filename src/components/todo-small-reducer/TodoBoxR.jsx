import React, { useReducer } from 'react';
import { uniqueId } from 'lodash';
import Item from './Item.jsx';
import { textReducer, tasksReducer } from './reducers';
import { updateText, addTask, removeTask } from './actions';

const TodoBoxR = () => {
  const [newTaskText, textDispatch] = useReducer(textReducer, '');
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  const handleChangeTask = ({ target: { value } }) => {
    textDispatch(updateText(value));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newTask = { id: uniqueId(), text: newTaskText };
    tasksDispatch(addTask(newTask));
    textDispatch(addTask(newTask));
  };

  const handleRemoveTask = (removingId) => (e) => {
    e.preventDefault();
    tasksDispatch(removeTask(removingId));
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

export default TodoBoxR;
