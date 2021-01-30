import React, { useState } from 'react';
import cn from 'classnames';

const BtnGroup = () => {
  const [active, setState] = useState(null);

  const setActive = (active) => {
    setState(active);
  };

  const selectLeftButton = () => {
    setActive('left');
  };

  const selectRightButton = () => {
    setActive('right');
  };

  const basicKlass = {
    btn: true,
    'btn-secondary': true,
  };

  const leftButtonClass = cn({
    ...basicKlass,
    left: true,
    active: active === 'left',
  });

  const rightButtonClass = cn({
    ...basicKlass,
    right: true,
    active: active === 'right',
  });

  return (
    <div className="btn-group" role="group">
      <button type="button" className={leftButtonClass} onClick={selectLeftButton}>
        Left
      </button>
      <button type="button" className={rightButtonClass} onClick={selectRightButton}>
        Right
      </button>
    </div>
  );
};

export default BtnGroup;
