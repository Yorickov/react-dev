import React, { Component } from 'react';

class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }

  render() {
    const { render } = this.props;

    return (
      <div className="vh-100" onMouseMove={this.handleMouseMove}>
        <p>Current mouse position: ({this.state.x}, {this.state.y})</p>
        {/* <Cat mouseCoords={state} /> */}
        {/* Take out dependency, but state is here! */}
        {render(this.state)}
      </div>
    );
  }
}

export default Mouse;
