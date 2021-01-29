import React from 'react';
import Mouse from './Mouse.jsx';
import Cat from './Cat.jsx';

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h3>Move cursor!</h3>
        {/* <Mouse /> */}
        {/* There are no state here! */}
        <Mouse
          render={(mouseCoords) => <Cat mouseCoords={mouseCoords} />}
        />
      </>
    );
  }
}

export default MouseTracker;
