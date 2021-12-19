import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTiming = { enter: 1000, exit: 2000 };

const modal = ({ show, closed }) => (
  <CSSTransition
    in={show}
    timeout={animationTiming}
    mountOnEnter
    unmountOnExit
    classNames={{
      enter: '',
      enterActive: 'ModalOpen',
      exit: '',
      exitActive: 'ModalClosed',
    }}
  >
    <div className={'Modal'}>
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  </CSSTransition>
);

export default modal;
