import React, { Component } from 'react';
import Dialog from './Dialog.jsx';

class SignUpDialog extends Component {
  state = { login: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ login: value });
  };

  handleSignUp = () => {
    const { login } = this.state;
    alert(`Welcome to the board, ${login}!`); // eslint-disable-line
  };

  render() {
    const { login } = this.state;
    return (
      <Dialog
        title="Marse research program"
        message="What is your name?"
      >
        <input
          value={login}
          onChange={this.handleChange}
          className='from-control'
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSignUp}
        >
          Take me!
        </button>
      </Dialog>
    );
  }
}

export default SignUpDialog;
