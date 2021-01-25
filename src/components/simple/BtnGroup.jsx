import React, { Component } from 'react';
import cn from 'classnames';

class BtnGroup extends Component {
  state = { active: null };

  selectLeftButton = () => {
    this.setActive('left');
  };

  selectRightButton = () => {
    this.setActive('right');
  };

  setActive(active) {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

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
        <button type="button" className={leftButtonClass} onClick={this.selectLeftButton}>
          Left
        </button>
        <button type="button" className={rightButtonClass} onClick={this.selectRightButton}>
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
