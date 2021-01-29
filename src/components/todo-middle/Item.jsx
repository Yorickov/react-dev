import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ task, onChangeTask }) => {
  const link = <a href="#" className="todo-task" onClick={onChangeTask}>{task.body}</a>;

  return (
    <div className="row">
      <div className="col-1">
        {task.id}
      </div>
      <div className="col">
        {task.state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
};

Item.propTypes = {
  task: PropTypes.object,
  onClick: PropTypes.func,
};

export default Item;
