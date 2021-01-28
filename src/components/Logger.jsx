import _ from 'lodash';
import React, { Component } from 'react';

class Logger extends Component {
  state = { items: [] };

  handleCount = (value) => {
    const { items } = this.state;
    const currentValue = _.get(items, [0, 'value'], 0) + value;
    const current = { id: _.uniqueId(), value: currentValue };
    this.setState({ items: [current, ...items] });
  };

  // handleCount(value) {
  //   const { items } = this.state;
  //   const currentValue = _.get(items, [0, 'value'], 0) + value;
  //   const current = { id: _.uniqueId(), value: currentValue };
  //   this.setState({ items: [current, ...items] });
  // }

  handleInc = () => this.handleCount(1);

  handleDec = () => this.handleCount(-1);

  handleRemove = (currentId) => () => {
    const { items } = this.state;
    this.setState({ items: items.filter(({ id }) => id !== currentId) });
  };

  renderItem({ id, value }) {
    return (
      <button key={id} type="button" className="list-group-item" onClick={this.handleRemove(id)}>
        {value}
      </button>
    );
  }

  renderBtns() {
    return (
      <div className="btn-group" role="group">
        <button type="button" className="btn inc" onClick={this.handleInc}>+</button>
        <button type="button" className="btn dec" onClick={this.handleDec}>-</button>
      </div>
    );
  }

  renderLog() {
    const { items } = this.state;
    if (items.length === 0) {
      return null;
    }
    return (
      <div className="list-group">
        {items.map((item) => this.renderItem(item))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h5>Logger</h5>
        {this.renderBtns()}
        {this.renderLog()}
      </div>
    );
  }
}

export default Logger;
