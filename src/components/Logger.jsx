import _ from 'lodash';
import React, { useState } from 'react';

const Logger = () => {
  const [items, setState] = useState([]);

  const handleCount = (value) => {
    const currentValue = _.get(items, [0, 'value'], 0) + value;
    const current = { id: _.uniqueId(), value: currentValue };
    setState([current, ...items]);
  };

  const handleInc = () => {
    handleCount(1);
  };

  const handleDec = () => {
    handleCount(-1);
  };

  const handleRemove = (currentId) => () => {
    setState(items.filter(({ id }) => id !== currentId));
  };

  const renderItem = ({ id, value }) => (
    <button key={id} type="button" className="list-group-item" onClick={handleRemove(id)}>
      {value}
    </button>
  );

  const renderBtns = () => (
    <div className="btn-group" role="group">
      <button type="button" className="btn inc" onClick={handleInc}>+</button>
      <button type="button" className="btn dec" onClick={handleDec}>-</button>
    </div>
  );

  const renderLog = () => {
    if (items.length === 0) {
      return null;
    }
    return (
      <div className="list-group">
        {items.map(renderItem)}
      </div>
    );
  };

  return (
    <div>
      <h5>Logger</h5>
      {renderBtns()}
      {renderLog()}
    </div>
  );
};

export default Logger;
