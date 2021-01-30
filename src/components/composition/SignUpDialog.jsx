import React, { useState } from 'react';
import Dialog from './Dialog.jsx';

const SignUpDialog = () => {
  const [login, setState] = useState('');

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  const handleSignUp = () => {
    alert(`Welcome to the board, ${login}!`); // eslint-disable-line
  };

  return (
    <Dialog
      title="Marse research program"
      message="What is your name?"
    >
      <input
        value={login}
        onChange={handleChange}
        className='from-control'
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSignUp}
      >
        Take me!
      </button>
    </Dialog>
  );
};

export default SignUpDialog;
