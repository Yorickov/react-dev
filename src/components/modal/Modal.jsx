import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">
      {children}
    </div>
    <button type="button" className="header-close-icon" data-dismiss="modal" aria-label="Close" onClick={toggle}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

Header.propTypes = { toggle: PropTypes.func };

const Body = ({ children }) => <p className="modal-body">{children}</p>;
const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

const Modal = (props) => {
  const { isOpen, children } = props;

  const classes = cn({
    modal: true,
    fade: isOpen,
    show: isOpen,
  });

  const style = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div className={classes} style={style}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.defaultProps = { isOpen: false };
Modal.propTypes = { isOpen: PropTypes.bool };

export default Modal;
