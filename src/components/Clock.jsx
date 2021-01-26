import React, { Component } from 'react';

class Clock extends Component {
  state = { time: new Date() };

  tick = () => {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    return <div>{time.toLocaleTimeString()}</div>;
  }
}

export default Clock;
