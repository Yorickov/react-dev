import React, { useState } from 'react';

const Mouse = (props) => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const { render } = props;

  const handleMouseMove = (e) => {
    setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="vh-100" onMouseMove={handleMouseMove}>
      <p>Current mouse position: ({state.x}, {state.y})</p>
      {/* <Cat mouseCoords={state} /> */}
      {/* Take out dependency, but state is here! */}
      {render(state)}
    </div>
  );
};

export default Mouse;
