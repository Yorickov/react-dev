import React, { Component } from 'react';
import Modal from './Modal.jsx';

class ModalComponent extends Component {
  state = { modal: false };

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  render() {
    const { modal } = this.state;

    return (
      <div>
        <button className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button className="footer-close-button btn btn-primary" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
