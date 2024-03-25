import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  return createPortal(
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal_-footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>,
    document.getElementById("modal-hook")
  );
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
