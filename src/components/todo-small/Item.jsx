import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { task: { text }, onRemove } = props;

  return (
    <div className="row">
      <div className="col-auto">
        <form onSubmit={onRemove} className="todo-remove-item-form">
          <button type="submit" className="btn btn-primary btn-sm">-</button>
        </form>
      </div>
      <div className="col-10">
        {text}
      </div>
    </div>
  );
};

Item.propTypes = {
  task: PropTypes.object,
  onRemove: PropTypes.func,
};

export default Item;
