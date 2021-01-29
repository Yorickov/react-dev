import React, { Component, createRef } from 'react';

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.refTextInput = createRef();
  }

  handleFocusTextInput = () => {
    this.refTextInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.refTextInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleFocusTextInput}
          className="btn btn-primary"
        />
      </div>
    );
  }
}

export default CustomTextInput;
