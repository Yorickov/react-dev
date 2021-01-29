import React, { Component } from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from '../../lib/routes';
import api from '../../lib/api';

class TodoBox extends Component {
  state = { newTaskText: '', tasks: [] };

  handleChangeText = ({ target: { value } }) => {
    this.setState({ newTaskText: value });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { newTaskText, tasks } = this.state;
    const response = await api.post(routes.tasksPath(), { body: newTaskText });
    const newTasks = [response.data, ...tasks];
    this.setState({ newTaskText: '', tasks: newTasks });
  };

  handleFinishTask = (id) => async (e) => {
    e.preventDefault();
    await api.patch(routes.finishTaskPath(id));

    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
    this.setState({ tasks: updatedTasks });
  };

  handleActivateTask = (id) => async (e) => {
    e.preventDefault();
    await api.patch(routes.activateTaskPath(id));

    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
    this.setState({ tasks: updatedTasks });
  };

  renderActiveTasks(activeTasks) {
    return (
      <div className="todo-active-tasks">
        {activeTasks
          .map((t) => <Item key={t.id} task={t} onChangeTask={this.handleFinishTask(t.id)}/>)}
      </div>
    );
  }

  renderFinishedTasks(finishedTasks) {
    return (
      <div className="todo-finished-tasks">
        {finishedTasks
          .map((t) => <Item key={t.id} task={t} onChangeTask={this.handleActivateTask(t.id)}/>)}
      </div>
    );
  }

  resetTasks = async () => {
    const response = await api.get(routes.tasksPath());
    this.setState({ tasks: response.data });
  }

  componentDidMount() {
    this.resetTasks();
  }

  renderForm() {
    const { newTaskText } = this.state;

    return (
      <form className="todo-form" onSubmit={this.handleSubmitForm}>
        <div className="mb-3">
          <input
            type="text"
            onChange={this.handleChangeText}
            value={newTaskText}
            required
            className="form-control mr-3"
            placeholder="I am going..."
          />
        </div>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((t) => t.state === 'active');
    const finishedTasks = tasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {activeTasks.length > 0 && this.renderActiveTasks(activeTasks)}
        {finishedTasks.length > 0 && this.renderFinishedTasks(finishedTasks)}
      </div>
    );
  }
}

export default TodoBox;
