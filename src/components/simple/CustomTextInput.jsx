import React, { useRef } from 'react';

const CustomTextInput = () => {
  const refTextInput = useRef();

  const handleFocusTextInput = () => {
    refTextInput.current.focus();
  };

  return (
    <form>
      <input type="text" ref={refTextInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleFocusTextInput}
        className="btn btn-primary"
      />
    </form>
  );
};

export default CustomTextInput;
