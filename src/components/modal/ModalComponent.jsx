import React, { useState } from 'react';
import Modal from './Modal.jsx';

const ModalComponent = () => {
  const [modal, setState] = useState(false);

  const toggle = () => {
    setState(!modal);
  };

  return (
    <div>
      <button className="modal-open-button btn btn-danger" onClick={toggle}>Open</button>
      <Modal isOpen={modal}>
        <Modal.Header toggle={toggle}>Modal title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Modal.Body>
        <Modal.Footer>
          <button className="footer-close-button btn btn-primary" onClick={toggle}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
