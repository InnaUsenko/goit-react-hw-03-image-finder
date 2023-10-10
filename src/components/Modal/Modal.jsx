import React, { Component } from 'react';
import css from './Modal.module.css';
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div
        className={css.overlay}
        onClick={() => {
          this.props.closeModal();
        }}
      >
        <div className={css.modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
